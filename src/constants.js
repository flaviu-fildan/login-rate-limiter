const CACHE_ENTRY_TTL_SECONDS = 600; // 10 minutes
const CACHE_KEY_PREFIX_LOGIN_ENTRY = 'LoginEntry';
const CACHE_KEY_PREFIX_LOGIN_COUNTER = 'LoginCounter';

const DATE_TIME_FORMAT = 'YYYYMMDD@HHmm';
const LOGIN_RATE_LIMIT = 5;

module.exports = {
  CACHE_ENTRY_TTL_SECONDS,
  CACHE_KEY_PREFIX_LOGIN_ENTRY,
  CACHE_KEY_PREFIX_LOGIN_COUNTER,
  DATE_TIME_FORMAT,
  LOGIN_RATE_LIMIT,
}
