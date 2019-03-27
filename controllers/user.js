const User = require('../models/user');
const bcrypt = require('bcrypt');
module.exports = {

  // create new user 
  // TODO: check same user

  signUp: (req, res) => {
    const hashPassword = bcrypt.hash(req.body.password, 10);
    const username = req.body.username;
    const email = req.body.email;
    hashPassword.then(password => {
      User.create({
        username,
        email,
        password
      }).then(user => {
        req.session.user = user._id;
        res.redirect('/user/login');
      }).catch(err => {
        res.redirect('/user/signup');
      })
    }).catch(err => {
      console.log(err);
    })
  },

  // check user in database
  logIn: (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // check username and password in database
    User.findOne({
      username
    }).then(user => {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          req.session.user = user._id;
          res.redirect('/user/dashboard');
        } else {
          res.redirect('/user/login');
        }
      })
    }).catch(err => {
      console.log(err);
    })
  }
}