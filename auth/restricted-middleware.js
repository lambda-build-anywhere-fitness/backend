const jwt = require('jsonwebtoken');
const jwtSecret = require('../utils/vars');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const secret = jwtSecret.jwtSecret;

    jwt.verify(token, secret, (error, decodedToken) => {
      if (error) {
        // the token is invalid
        res.status(401).json({message: 'you cannot pass!'});
      } else {
        // the token is good
        req.jwt = decodedToken;

        next();
      }
    });
  } else {
    res.status(400).json({message: 'Please provide the authentication information'});
  }
};