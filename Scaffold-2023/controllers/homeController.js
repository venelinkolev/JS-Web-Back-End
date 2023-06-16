const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('home', {
    title: 'Cubicle',
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
