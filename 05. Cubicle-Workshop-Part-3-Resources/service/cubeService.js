const Cube = require('../models/Cube');

async function create(cube, creatorId) {
  const { name, description, imageUrl, difficultyLevel } = cube;

  const newCube = await Cube.create({
    name,
    description,
    imageUrl,
    difficultyLevel,
    creatorId,
  });
  console.log(newCube);
}

async function  details(id) {
  const cube = await Cube.findById(id).populate('accessories').lean();

  //console.log('First', cube);
  return cube;
}

async function getCube(id) {
  return await Cube.findById(id).lean();
}

async function deleteCube(id) {
  return await Cube.findByIdAndDelete(id);
}

async function updateCube(id, cubeData) {
  return await Cube.findByIdAndUpdate(id, cubeData);
}

module.exports = {
  create,
  details,
  getCube,
  deleteCube,
  updateCube,
};
