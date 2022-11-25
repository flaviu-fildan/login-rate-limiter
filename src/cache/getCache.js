const Redis = require('ioredis');

let redisClient;

const getCache = () => {
  if (redisClient) {
    return redisClient;
  }

  redisClient = new Redis({
    host: process.env.REDIS_HOSTNAME,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
  });

  redisClient.on('ready', () => {
    console.info('REDIS: Redis up!');
  });

  redisClient.on('connect', () => {
    console.info('REDIS: Redis connecting.');
  });

  redisClient.on('end', () => {
    console.error('REDIS: Redis is shutting down');
  });

  redisClient.on('warning', (warning) => {
    console.warn('REDIS: WARNING: ', warning);
  });

  redisClient.on('error', (error) => {
    console.error('REDIS: ERROR: ', error);
  });

  process.on('exit', () => {
    redisClient.quit(() => {
      console.log('REDIS: Redis client stopped.');
      process.exit();
    });
  });

  return redisClient;
}

module.exports = getCache;
