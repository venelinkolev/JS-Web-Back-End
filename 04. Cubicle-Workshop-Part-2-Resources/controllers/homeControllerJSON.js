const router = require('express').Router();
const { read } = require('../util/fileManage');

router.get('/', async (req, res) => {
  const search = req.query;
  //console.log(search);
  const cubes = await read(search);

  res.render('home', {
    title: 'Cubicle',
    cubes,
  });
});

router.post('/', (req, res) => {});

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
