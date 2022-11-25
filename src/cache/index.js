const getCache = require('./getCache');
const getCacheKey = require('./getCacheKey');

const cache = getCache();

module.exports = {
  cache,
  getCacheKey,
};
