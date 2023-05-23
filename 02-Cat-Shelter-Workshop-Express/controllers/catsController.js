const router = require('express').Router();
const fs = require('fs').promises;

router.get('/add-breed', (req, res) => {
  res.render('addBreed', {
    title: 'Cat Shelter',
    isHome: false,
  });
});

router.post('/add-breed', async (req, res) => {
  console.log('Create Breed');
  
  const breedsFile = JSON.parse(await fs.readFile('./data/breeds.json', 'utf8'));
  const data = req.body.breed;
  
  breedsFile.push(data);
  console.log(breedsFile);

  await fs.writeFile('./data/breeds.json', JSON.stringify(breedsFile));

  res.redirect('/');
});

router.get('/add-cat', async (req, res) => {
  const breedsFile = JSON.parse(await fs.readFile('./data/breeds.json', 'utf8'));

  console.log(breedsFile);

  res.render('addCat', {
    title: 'Cat Shelter',
    isHome: false,
    breeds: breedsFile,
  });
});

router.post('/add-cat', async (req, res) => {
  console.log('Create Cat');
  const id = 'ven-' + ('00000' + (Math.random() * 999990 | 0)).slice(-6);
  console.log(id);
  
  const data = {
    _id: id,
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    breed: req.body.breed,
  };
  console.log(data);
  
  const catsFile = JSON.parse(await fs.readFile('./data/cats.json', 'utf8'));
  catsFile.push(data);
  await fs.writeFile('./data/cats.json', JSON.stringify(catsFile, null, ' '));
  
  res.redirect('/');
});

router.get('/:idCat', async (req, res) => {
  const id = req.params.idCat;
  console.log(id);
  const cats = JSON.parse(await fs.readFile('./data/cats.json', 'utf8'));

  const currentCat = cats.find(cat => cat._id == id);
  console.log(currentCat);

  res.render('catShelter', {
    title: 'Cat Shelter',
    isHome: false,
    currentCat,
  });
});

router.get('/:idCat/edit', (req, res) => {
  res.render('editCat', {
    title: 'Cat Shelter',
    isHome: false,
  });
});

router.delete('/:idCat', async (req, res) => {
  const id = req.params.idCat;
  console.log(id);
  const cats = JSON.parse(await fs.readFile('./data/cats.json', 'utf8'));

  const currentCat = cats.find(cat => cat._id == id);
  //console.log(currentCat);
  const index = cats.findIndex(i => i._id == id);
  console.log(index);

  res.redirect('/');
});

module.exports = router;
