const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home', {
    title: 'Cubicle',
  });
});

module.exports = router;
