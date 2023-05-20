const router = require('express').Router();

router.get('/add-breed', (req, res) => {
  res.render('addBreed', {
    title: 'Cat Shelter',
    isHome: false,
  });
});

router.post('/add-breed', (req, res) => {
  console.log('Create Breed');
  console.log(req.body);
  const data = req.body;

  res.redirect('/');
});

router.get('/add-cat', (req, res) => {
  res.render('addCat', {
    title: 'Cat Shelter',
    isHome: false,
  });
});

router.get('/:idCat', (req, res) => {
  res.render('catShelter', {
    title: 'Cat Shelter',
    isHome: false,
  });
});

router.get('/:idCat/edit', (req, res) => {
  res.render('editCat', {
    title: 'Cat Shelter',
    isHome: false,
  });
});

module.exports = router;
