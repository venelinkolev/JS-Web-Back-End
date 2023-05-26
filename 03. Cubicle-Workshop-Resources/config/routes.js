const router = require('express').Router();

const homeController = require('../controllers/homeController');
const cubesController = require('../controllers/cubesControler');

router.use(homeController);
router.use('/cubes', cubesController);
router.get('*', (req, res) => {
  res.redirect('/404');
});

module.exports = router;
