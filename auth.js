var jwt = require('jwt-simple');
var config = require('./config');

module.exports = function (req, res, next) {
  if (req.headers['x-ath']) {
    req.auth = jwt.decode(req.headers['x-auth'], config.secret)
  }
  next()
};