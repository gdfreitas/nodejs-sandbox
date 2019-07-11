const { clearHash } = require('../services/cache');

module.exports = async (req, res, next) => {
  await next();
  console.log(`CLEARING CACHE FOR ${req.user.id}`)
  clearHash(req.user.id)
}