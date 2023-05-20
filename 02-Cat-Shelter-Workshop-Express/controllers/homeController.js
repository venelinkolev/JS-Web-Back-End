const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home', {
    title: 'Cat Shelter',
    isHome: true,
  });
});

router.post('/', (req, res) => {});

module.exports = router;
