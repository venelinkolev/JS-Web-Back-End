const router = require('express').Router();

const homeController = require('../controllers/homeController');
const gamesController = require('../controllers/gamesController');
const authController = require('../controllers/authController');

router.use(homeController);
router.use('/auth', authController);
router.use('/games', gamesController);
router.get('*', (req, res) => {
  res.redirect('/404');
});

module.exports = router;
