const { getCacheKey, cache } = require("../cache");
const { LOGIN_RATE_LIMIT, CACHE_LOGIN_ENTRY_KEY_PREFIX } = require("../constants");

const isLoginPermittedFor = async (ipAddress) => {
  const keyPattern = {
    prefix: CACHE_LOGIN_ENTRY_KEY_PREFIX,
    ipAddress,
    timestamp: '*',
  };

  const loginAttempts = await cache.keys(getCacheKey(keyPattern));

  return loginAttempts.length < LOGIN_RATE_LIMIT;
};

module.exports = isLoginPermittedFor;
