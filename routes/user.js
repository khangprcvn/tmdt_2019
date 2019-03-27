const express = require('express');
const router = express.Router();
const path = require('path');
const userController = require('../controllers/user');

const sessionChecker = (req, res, next) => {
	if (req.session.user && req.cookies.user_id) {
			res.redirect('/user/dashboard');
	} else {
			next();
	}    
};

router.get('/dashboard', (req, res) => {
  if (req.session.user && req.cookies.user_id) {
    res.sendFile(path.join(__dirname, '../' + '/views/page/dashboard.html'));
  } else {
    res.redirect('/user/login');
  }
});

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../' + '/views/page/login.html'));
});
router.post('/login', userController.logIn);


router.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '../' + '/views/page/sign_up.html'));
});
router.post('/signup', userController.signUp);

router.get('/logout', (req, res) => {
  if (req.session.user && req.cookies.user_id) {
    res.clearCookie('user_id');
    res.redirect('/user/login');
  } else {
    res.redirect('/user/login');
  }
})


module.exports = router;