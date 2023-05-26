const { createUnzip } = require('zlib');

const fs = require('fs').promises;

async function read(searchParam) {
  const { search, from, to } = searchParam;
  let cubes = JSON.parse(await fs.readFile('./config/database.json', 'utf8'));

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

async function write(database) {
  return await fs.writeFile(
    './config/database.json',
    JSON.stringify(database, null, ' ')
  );
}

module.exports = {
  read,
  write,
};
