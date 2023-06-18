const { getAllAnimals } = require('../service/animalService');

const router = require('express').Router();

router.get('/', async (req, res) => {
  let animals = null;
  try {
    animals = await getAllAnimals();
  } catch (err) {
    return res.render('Home', {
      title: 'Home Page',
      error: extractErrorMessages(err),
    });
  }

  res.render('home', {
    title: 'Home Page',
    animals,
  });
  // res.render('home', {
  //   title: 'Home page',
  // });
});

router.get('/404', (req, res) => {
  res.render('404', {
    title: 'Page not found',
  });
});

module.exports = router;
