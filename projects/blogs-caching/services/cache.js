const util = require('util')

const mongoose = require('mongoose')
const redis = require('redis')

const redisClient = redis.createClient(process.env.REDIS_URI);

redisClient.on('error', function (err) {
  console.error('[redis-client] Error', err);
});

redisClient.hget = util.promisify(redisClient.hget);

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.cache = function (options = {}) {
  this.useCache = true;
  this.hashKey = JSON.stringify(options.key || '');
  return this;
}

mongoose.Query.prototype.exec = async function () {
  if (!this.useCache) {
    console.log('FETCHING VALUE NO CACHE BEING USED')
    return exec.apply(this, arguments);
  }

  var cachingKey = JSON.stringify(Object.assign({}, this.getQuery(), {
    collection: this.mongooseCollection.name
  }));

  const cachedValue = await redisClient.hget(this.hashKey, cachingKey);

  if (cachedValue) {
    console.log('RETURNING CACHED VALUE')
    const parsedCache = JSON.parse(cachedValue);

    if (Array.isArray(parsedCache)) {
      return parsedCache.map(doc => new this.model(doc));
    }

    return new this.model(parsedCache);
  }

  const result = await exec.apply(this, arguments);

  console.log('FETCHING VALUE BECAUSE WAS NOT FOUND')

  redisClient.hset(this.hashKey, cachingKey, JSON.stringify(result), 'EX', 5)

  return result;
}

module.exports = {
  clearHash(hashKey) {
    redisClient.del(JSON.stringify(hashKey))
  }
}