const cron = require("node-cron");
const moment = require('moment');

const { CACHE_KEY_PREFIX_LOGIN_COUNTER, DATE_TIME_FORMAT } = require("../constants");
const { cache, getCacheKey } = require("../cache");

const setupScheduledJobs = () => {
  cron.schedule("*/1 * * * *", async () => {
    const timestamp = moment().subtract(1, 'minutes').format(DATE_TIME_FORMAT);
    const key = {
      prefix: CACHE_KEY_PREFIX_LOGIN_COUNTER,
      timestamp,
    };

    const cacheResponse = await cache.zrange(getCacheKey(key), '-inf', '+inf', 'BYSCORE', 'WITHSCORES');
    const requestsCounterByIp = {};

    cacheResponse.forEach((element, index) => {
      if (index % 2 == 1) {
        const ip = cacheResponse[index - 1];
        const countValue = element;
        requestsCounterByIp[ip] = countValue;
      }
    });

    console.log("---------------------");
    console.log('Login requests counter: ', JSON.stringify(requestsCounterByIp, null, 2));
    console.log("---------------------");
  });
};

module.exports = { setupScheduledJobs };
