const Game = require('../models/Game');

async function searchGames(search, platform) {
  //console.log(search, from, to);
  let games = await Game.find({}).lean();
  //console.log('First', cubes);

  if (search) {
    games = games.filter((game) =>
      game.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (platform) {
    games = games.filter(
      (game) => game.platform == platform
    );
  }

  // if (to) {
  //   games = games.filter((game) => Number(game.difficultyLevel) <= Number(to));
  // }

  return games.sort(
    (a, b) => Number(a.price) - Number(b.price)
  );
}

module.exports = searchGames;
