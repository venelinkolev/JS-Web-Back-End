const router = require('express').Router();
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const {
  create,
  getAllGames,
  getGame,
  updateGame,
  deleteGame,
  buyGame,
} = require('../service/gameService');

const { optionsViewData } = require('../util/optionsViewData');

router.get('/catalog', async (req, res) => {
  let games = null;
  try {
    games = await getAllGames();
  } catch (err) {
    return res.render('catalog', {
      title: 'Game Catalog',
      error: err.message,
    });
  }
  res.render('catalog', {
    title: 'Game Catalog',
    games,
  });
});

router.get('/create', (req, res) => {
  res.render('create', {
    title: 'Create Game',
  });
});

router.post('/create', async (req, res) => {
  const creatorId = req.user.id;
  console.log(creatorId);
  try {
    await create(req.body, creatorId);
  } catch (err) {
    return res.render('create', {
      title: 'Create Game',
      error: err.message,
    });
  }

  res.redirect('/games/catalog');
});

router.get('/:gameId/details', async (req, res) => {
  const gameId = req.params.gameId;
  const userId = req.user.id;
  let game = null;
  try {
    game = await getGame(gameId);
  } catch (err) {
    return res.render('details', {
      titel: 'Details Game',
      error: err.message,
    });
  }

  const isCreator = game.creatorId.toString() == req.user?.id;
  //console.log(isCreator, '-----', game.creatorId.toString(), '--', req.user?.id);

  function isBuyer(game, userId) {
    const findBuyer = game.boughtBy.find((id) => id == userId);
    //console.log(findBuyer);
    if (findBuyer) return false;
    else return true;
  }

  res.render('details', {
    title: `${game.name} Details`,
    game,
    isCreator,
    findBuyer: isBuyer(game, userId),
  });
});

router.get('/:gameId/edit', async (req, res) => {
  const options = ['-------', 'PC', 'Nintendo', 'PS4', 'PS5', 'XBOX'];

  const gameId = req.params.gameId;
  let game = null;
  try {
    game = await getGame(gameId);
  } catch (err) {
    return res.render('details', {
      titel: 'Details Game',
      error: err.message,
    });
  }

  function option(platform) {
    return options.map((x) => ({
      value: x,
      selected: platform == x ? 'selected' : '',
    }));
  }

  res.render('edit', {
    title: 'Edit Game',
    game,
    option: option(game.platform),
  });
});

router.post('/:gameId/edit', async (req, res) => {
  const gameId = req.params.gameId;
  const gameData = req.body;

  try {
    await updateGame(gameId, gameData);
  } catch (err) {
    return res.render('edit', {
      titel: 'Edit Game',
      error: err.message,
    });
  }

  res.redirect(`/games/${gameId}/details`);
});

router.get('/:gameId/delete', async (req, res) => {
  const gameId = req.params.gameId;
  try {
    await deleteGame(gameId);
  } catch (err) {
    return res.render('details', {
      titel: 'Details Game',
      error: err.message,
    });
  }

  res.redirect('/games/catalog');
});

router.get('/:gameId/buy', async (req, res) => {
  const gameId = req.params.gameId;
  const ownewId = req.user.id;

  try {
    await buyGame(gameId, ownewId);
  } catch (err) {
    return res.render('details', {
      titel: 'Details Game',
      error: err.message,
    });
  }

  //console.log(gameId, '---', ownewId);

  res.redirect(`/games/${gameId}/details`);
});

module.exports = router;
