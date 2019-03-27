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
      const user = new User({
        username,
        email,
        password
      });
      user.save(err => {
        if (err) {
          return next(err);
        }
        res.send("User created successfully")
      })
    }).catch(err => {
      console.log(err);
    })
  },

  // check user in database
  logIn: (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(password);
    // check username and password in database
    User.findOne({
      username
    }).then(user => {
      console.log(user);
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          console.log(true);
        } else {
          console.log(false);
        }
      })
    }).catch(err => {
      console.log(err);
    })
    res.redirect('/user/signup');
  }
}