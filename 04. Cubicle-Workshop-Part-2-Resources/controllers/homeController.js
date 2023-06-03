const router = require('express').Router();
const Cube = require('../models/Cube');

router.get('/', async (req, res) => {
  const cubes = await Cube.find({}).lean();
  //console.log(cubes);
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
