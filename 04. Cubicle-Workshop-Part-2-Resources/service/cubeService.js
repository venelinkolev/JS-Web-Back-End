const Cube = require('../models/Cube');

async function create(cube) {
  const { name, description, imageUrl, difficultyLevel } = cube;

  const newCube = await Cube.create({
    name,
    description,
    imageUrl,
    difficultyLevel,
  });
  console.log(newCube);
}

async function details(id) {
  const cube = await Cube.findById(id).lean();

  //console.log('First', cube);
  return cube;
}

async function getCube(id) {
  return await Cube.findById(id).lean();
}

module.exports = {
  create,
  details,
  getCube,
};
