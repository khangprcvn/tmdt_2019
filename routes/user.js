const express = require('express');
const router = express.Router();
const path = require('path');
const userController = require('../controllers/user');;

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../' + '/views/page/login.html'));
});

router.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '../' + '/views/page/sign_up.html'));
});

router.post('/postdata', userController.signUp);

router.post('/getuser', userController.logIn);

module.exports = router;