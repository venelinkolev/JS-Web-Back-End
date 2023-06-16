const router = require('express').Router();
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const { create, getAllGames, getGame } = require('../service/gameService');

const { optionsViewData } = require('../util/optionsViewData');

router.get('/catalog', async (req, res) => {
  let games = null;
  try {
    games = await getAllGames();
  } catch (err) {
    return res.render('create', {
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
      error: err.message,
    });
  }

  res.redirect('/games/catalog');
});

router.get('/:gameId/details', async (req, res) => {
  const gameId = req.params.gameId;
  let game = null;
  try {
    game = await getGame(gameId);
  } catch (err) {
    return res.render('details', {
      error: err.message,
    });
  }

  res.render('details', {
    title: `${game.name} Details`,
    game,
  });
});

module.exports = router;
