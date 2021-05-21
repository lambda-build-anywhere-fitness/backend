const jwt = require('jsonwebtoken');
const secret = require('./vars');

function generateToken(user) {
  const payload = {
    sub: user.id,
    username: user.username,
    role: user.role
  };

  const options = {
    expiresIn: '1d'
  };

  return jwt.sign(payload, secret.jwtSecret, options);
}




module.exports = generateToken;