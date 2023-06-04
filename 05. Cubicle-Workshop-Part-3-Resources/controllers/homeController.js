const router = require('express').Router();
const Cube = require('../models/Cube');
const searchCube = require('../util/searchManage');

router.get('/', async (req, res) => {
  //console.log(req.query);
  const { search, from, to } = req.query;

  const cubes = await searchCube(search, from, to);
  //console.log('Second', cubes);
  res.render('home', {
    title: 'Cubicle',
    cubes,
  });
});

router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Cubicle',
  });
});

router.get('/404', (req, res) => {
  res.render('404', {
    title: 'Page not found',
  });
});

module.exports = router;
