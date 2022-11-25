const { getCacheKey, cache } = require("../cache");
const { LOGIN_RATE_LIMIT, CACHE_KEY_PREFIX_LOGIN_ENTRY } = require("../constants");

const isLoginPermittedFor = async (ipAddress) => {
  const keyPattern = {
    prefix: CACHE_KEY_PREFIX_LOGIN_ENTRY,
    ipAddress,
    timestamp: '*',
  };

  const loginAttempts = await cache.keys(getCacheKey(keyPattern));

  return loginAttempts.length < LOGIN_RATE_LIMIT;
};

module.exports = isLoginPermittedFor;
