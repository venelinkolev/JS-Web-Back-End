const Animal = require('../models/Animal');

async function search(location) {
  console.log(location, 'Second');
  let animals = await Animal.find({}).lean();
  //console.log('First', cubes);

  if (location) {
    animals = animals.filter((animal) =>
      animal.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  return animals.sort((a, b) => Number(a.name) - Number(b.name));
}

module.exports = search;
