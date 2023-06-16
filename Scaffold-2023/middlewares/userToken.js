const jwt = require('jsonwebtoken');
const { SECRET } = require('../util/secret');

exports.userToken = (req, res, next) => {
  const token = req.cookies['user'];

  if (token) {
    // validate token
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        res.clearCookie();

        return res.render('login', {
          error: err.message,
        });
      }

      req.user = user;
      res.locals.user = user;
      res.locals.isAuthUser = true;

      next();
    });
  } else {
    next();
  }
};
