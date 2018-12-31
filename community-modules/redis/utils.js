const utils = (redisClient) => {
    const getCache = (key) => {
        return new Promise((resolve, reject) => {
            redisClient.get(key, (error, value) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(value)
                }
            })
        })
    }

    const setCache = (key, value) => {
        return new Promise((resolve, reject) => {
            redisClient.set(key, value, 'EX', 10, (error) => {
                error ? reject(error) : resolve()
            })
        })
    }

    return { setCache, getCache }
}

module.exports = utils