const router = require('express').Router();
const jwt = require('jsonwebtoken');

router.get('/register', (req, res) => {
  res.render('register');
  res.cookie('User', 'Venelin-Cookie');
});

router.post('/register', (req, res) => {
  const registerData = req.body.username;
  const cookies = req.cookies;
  console.log(registerData);
  console.log(cookies);

  res.redirect('/auth/login');
});

router.get('/login', (req, res) => {
  const isValid = Boolean;
  //if isValid is true

  // generate token

  // set token as cookie

  res.render('login');
});

router.get('/logout', (req, res) => {
  res.render('register');
});
module.exports = router;
