const Game = require('../models/Game');

async function create(game, creatorId) {
  //console.log(game, '--------', creatorId);

  const { name, imageUrl, price, description, genre, platform } = game;

  const newGame = await Game.create({
    name,
    imageUrl,
    price,
    description,
    genre,
    platform,
    creatorId,
  });
  console.log(newGame);
}

async function getAllGames() {
  return await Game.find({}).lean();
}

async function details(id) {
  return await Game.findById(id);
  //populate('accessories');
}

async function getGame(id) {
  return await Game.findById(id).lean();
}

async function deleteGame(id) {
  return await Game.findByIdAndDelete(id);
}

async function updateGame(id, gameData) {
  return await Game.findByIdAndUpdate(id, gameData);
}

async function buyGame(gameId, ownewId) {
  const currnetGame = await Game.findById(gameId);
  currnetGame.boughtBy.push(ownewId);

  currnetGame.save();
}

module.exports = {
  create,
  details,
  getAllGames,
  getGame,
  deleteGame,
  updateGame,
  buyGame,
};
