const router = require('express').Router();

const homeController = require('../controllers/homeController');
const cubesController = require('../controllers/cubesController');
const accessoryController = require('../controllers/accessoryController');

router.use(homeController);
router.use('/cubes', cubesController);
router.use('/accessory', accessoryController);
router.get('*', (req, res) => {
  res.redirect('/404');
});

module.exports = router;
