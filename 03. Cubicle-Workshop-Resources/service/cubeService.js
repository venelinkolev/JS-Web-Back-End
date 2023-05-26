const fs = require('../util/fileManage');
const uniqId = require('uniqid');

async function create(cube) {
  const database = await fs.read();

  const { name, description, imageUrl, difficultyLevel } = cube;
  //console.log(name, description, imageUrl, difficultyLevel);

  const idCube = uniqId();

  database.push({
    _id: idCube,
    name,
    description,
    imageUrl,
    difficultyLevel,
  });

  await fs.write(database);
}

async function details(id) {
  const database = await fs.read();

  const cube = database.find((cube) => cube._id == id);

  return cube;
}

module.exports = {
  create,
  details,
};
