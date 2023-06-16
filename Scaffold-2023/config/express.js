const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const { userToken } = require('../middlewares/userToken');

module.exports = (app) => {
  //TODO: Setup the view engine
  app.engine('.hbs', handlebars.engine({ extname: '.hbs' }));
  app.set('view engine', '.hbs');

  //TODO: Setup the body parser
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(userToken);

  //TODO: Setup the static files
  app.use('/static', express.static('static'));
};
