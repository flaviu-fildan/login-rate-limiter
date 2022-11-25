const getCacheKey = (cacheKey) => {
  return (
    (cacheKey &&
      Object.keys(cacheKey)
        .sort()
        .map((key) => cacheKey[key])
        .filter((value) => !!value)
        .join('-')) ||
    ''
  );
}

module.exports = getCacheKey;
