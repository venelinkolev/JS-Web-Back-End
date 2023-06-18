const router = require('express').Router();
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const { extractErrorMessages } = require('../util/errorHelper');

const {
  create,
  details,
  getAnimal,
  deleteAnimal,
  updateAnimal,
  getAllAnimals,
  donation,
} = require('../service/animalService');
const search = require('../util/searchManage');

router.get('/dashboard', async (req, res) => {
  let animals = null;
  try {
    animals = await getAllAnimals();
  } catch (err) {
    return res.render('dashboard', {
      title: 'Dashboard Page',
      error: extractErrorMessages(err),
    });
  }
  res.render('dashboard', {
    title: 'Dashboard Page',
    animals,
  });
});

router.get('/create', isAuthenticated, (req, res) => {
  res.render('create', {
    title: 'Add Animal',
  });
});
router.post('/create', isAuthenticated, async (req, res) => {
  const ownerId = req.user.id;
  //console.log(creatorId);
  try {
    await create(req.body, ownerId);
  } catch (err) {
    return res.render('create', {
      title: 'Add Animal',
      error: extractErrorMessages(err)[0],
    });
  }

  res.redirect('/animals/dashboard');
});

router.get('/:animalId/details', async (req, res) => {
  const animalId = req.params.animalId;
  const userId = req.user?.id;
  let animal = null;
  try {
    animal = await getAnimal(animalId);
  } catch (err) {
    return res.render('details', {
      titel: 'Details Page',
      error: extractErrorMessages(err),
    });
  }

  const isOwner = animal.owner.toString() == req.user?.id;
  //console.log(isCreator, '-----', game.creatorId.toString(), '--', req.user?.id);

  function donation(animal, userId) {
    const donation = animal.donation.find((id) => id == userId);
    //console.log(findBuyer);
    if (donation) return false;
    else return true;
  }

  res.render('details', {
    title: `${animal.name} Details`,
    animal,
    isOwner,
    donation: donation(animal, userId),
  });
});

router.get('/:animalId/edit', isAuthenticated, async (req, res) => {
  const animalId = req.params.animalId;
  let animal = null;
  try {
    animal = await getAnimal(animalId);
  } catch (err) {
    return res.render('details', {
      titel: 'Details Animal',
      error: extractErrorMessages(err),
    });
  }

  res.render('edit', {
    title: 'Edit Page',
    animal,
  });
});

router.post('/:animalId/edit', isAuthenticated, async (req, res) => {
  const animalId = req.params.animalId;
  const animalData = req.body;

  try {
    await updateAnimal(animalId, animalData);
  } catch (err) {
    return res.render('edit', {
      titel: 'Edit Animal',
      error: extractErrorMessages(err),
    });
  }

  res.redirect(`/animals/${animalId}/details`);
});

router.get('/:animalId/delete', isAuthenticated, async (req, res) => {
  const animalId = req.params.animalId;
  try {
    await deleteAnimal(animalId);
  } catch (err) {
    return res.render('details', {
      titel: 'Details Animal',
      error: extractErrorMessages(err),
    });
  }

  res.redirect('/animals/dashboard');
});

router.get('/:animalId/donation', isAuthenticated, async (req, res) => {
  const animalId = req.params.animalId;
  const ownewId = req.user.id;

  try {
    await donation(animalId, ownewId);
  } catch (err) {
    return res.render('details', {
      titel: 'Details Animal',
      error: extractErrorMessages(err),
    });
  }

  //console.log(gameId, '---', ownewId);

  res.redirect(`/animals/${animalId}/details`);
});

router.get('/search', async (req, res) => {
  const { location } = req.query;
  console.log(location);
  let animals = null;
  try {
    animals = await search(location);
  } catch (err) {
    return res.render('search', {
      titel: 'Search Animal',
      error: extractErrorMessages(err),
    });
  }
  res.render('search', {
    title: 'Search Animal',
    animals,
  });
});

module.exports = router;
