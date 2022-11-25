const moment = require('moment');

const { getCacheKey, cache } = require("../cache");
const { CACHE_KEY_PREFIX_LOGIN_ENTRY, CACHE_ENTRY_TTL_SECONDS } = require('../constants');

const storeLoginEntry = async (ipAddress) => {
  const timestamp = moment().valueOf();
  const key = {
    prefix: CACHE_KEY_PREFIX_LOGIN_ENTRY,
    ipAddress,
    timestamp,
  };

  const cacheStoreResponse = await cache.setex(getCacheKey(key), CACHE_ENTRY_TTL_SECONDS, '1');

  console.log('Login attempt successfully stored in cache: ', cacheStoreResponse);
}

module.exports = storeLoginEntry;
