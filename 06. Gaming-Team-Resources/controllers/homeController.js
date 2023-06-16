const router = require('express').Router();
const Cube = require('../models/Game');
const searchCube = require('../util/searchManage');

router.get('/', async (req, res) => {
  res.render('home', {
    title: 'Games',
  });
});

router.get('/404', (req, res) => {
  res.render('404', {
    title: 'Page not found',
  });
});

module.exports = router;
