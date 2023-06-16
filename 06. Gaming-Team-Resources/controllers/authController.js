const router = require('express').Router();
const { createUser, findUser } = require('../service/userService');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../util/secret');

router.get('/register', (req, res) => {
  res.render('register', {
    title: 'Register Form',
  });
});

router.post('/register', async (req, res) => {
  try {
    await createUser(req.body);
  } catch (err) {
    return res.render('register', {
      error: err.message,
      user: {
        username: req.body.username,
        email: req.body.email,
      },
    });
  }

  res.redirect('/');
});

router.get('/login', (req, res) => {
  res.render('login', {
    title: 'Login Form',
  });
});

router.post('/login', async (req, res) => {
  let payload = null;

  try {
    payload = await findUser(req.body);
  } catch (err) {
    return res.render('login', {
      error: err.message,
    });
  }

  jwt.sign(payload, SECRET, { expiresIn: '2d' }, (err, token) => {
    if (err) {
      return res.render('login', {
        error: err.message,
      });
    }

    res.cookie('user', token, { httpOnly: true });
    res.redirect('/');
  });
});

router.get('/logout', (req, res) => {
  res.clearCookie('user');

  res.redirect('/');
});
module.exports = router;
