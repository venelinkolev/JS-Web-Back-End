const router = require('express').Router();
const fs = require('fs').promises;

router.get('/', async (req, res) => {
  const cats = JSON.parse(await fs.readFile('./data/cats.json', 'utf8'));

  res.render('home', {
    title: 'Cat Shelter',
    isHome: true,
    cats,
  });
});

router.post('/', (req, res) => {});

module.exports = router;
