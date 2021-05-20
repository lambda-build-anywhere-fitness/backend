const express = require('express');
const bcryptjs = require('bcryptjs');
const Users = require('../users/users-model');
const {isValid} = require('../users/user-services');
const generateToken = require('../utils/generateToken');

const router = express.Router();

router.post('/register', (req, res) => {
  const credentials = req.body;

  if (isValid(credentials)) {
    const rounds = process.env.BCRYPT_ROUNDS || 8;

    // hash the password
    const hash = bcryptjs.hashSync(credentials.password, rounds);

    credentials.password = hash;

    // save the user to the database
    Users.addUser(credentials)
      .then(user => {
        res.status(201).json({data: user, message: 'registration success'});
      })
      .catch(error => {
        res.status(500).json({message: error.message});
      });
  } else {
    res.status(400).json({
      message: 'please provide username and password'
    });
  }
});

router.post('/login', (req, res) => {
  const {username, password} = req.body;

  if (isValid(req.body)) {
    Users.findBy({username})
      .then(([user]) => {
        if (user && bcryptjs.compareSync(password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({message: 'logged in', token, role: user.role});
        }
      })
      .catch(err => {
        res.status(500).json({message: 'Error loggin in', error: err.message});
      });
  } else {
    res.status(404).json({error: 'please provide username and password'});
  }
});

module.exports = router;