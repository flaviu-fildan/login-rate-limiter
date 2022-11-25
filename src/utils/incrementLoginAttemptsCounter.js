const moment = require('moment');

const { cache, getCacheKey } = require("../cache");
const { CACHE_KEY_PREFIX_LOGIN_COUNTER, DATE_TIME_FORMAT } = require("../constants")

const incrementLoginAttemptsCounter = async (ipAddress) => {
  const timestamp = moment().format(DATE_TIME_FORMAT);
  const key = {
    prefix: CACHE_KEY_PREFIX_LOGIN_COUNTER,
    timestamp,
  };

  const cacheKey = getCacheKey(key);
  const cacheResponse = await cache
    .multi()
    .zadd(cacheKey, 'INCR', '1', ipAddress)
    .expire(cacheKey, 120)
    .exec();

  console.log('Login attempts counter successfully incremented: ', cacheResponse);
};

module.exports = incrementLoginAttemptsCounter;
