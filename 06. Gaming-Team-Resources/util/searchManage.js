const Cube = require('../models/Game');

async function searchCube(search, from, to) {
  //console.log(search, from, to);
  let cubes = await Cube.find({}).lean();
  //console.log('First', cubes);

  if (search) {
    cubes = cubes.filter((cube) =>
      cube.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (from) {
    cubes = cubes.filter(
      (cube) => Number(cube.difficultyLevel) >= Number(from)
    );
  }

  if (to) {
    cubes = cubes.filter((cube) => Number(cube.difficultyLevel) <= Number(to));
  }

  return cubes.sort(
    (a, b) => Number(a.difficultyLevel) - Number(b.difficultyLevel)
  );
}

module.exports = searchCube;
