const Animal = require('../models/Animal');

async function create(animal, creatorId) {
  const { name, description, imageUrl, difficultyLevel } = animal;

  const newAnimal = await Animal.create({
    name,
    description,
    imageUrl,
    difficultyLevel,
    creatorId,
  });
  console.log(newAnimal);
}

function details(id) {
  const animal = Animal.findById(id);

  //console.log('First', cube);
  return animal;
}

async function getAnimal(id) {
  return await Animal.findById(id).lean();
}

async function deleteAnimal(id) {
  return await Animal.findByIdAndDelete(id);
}

async function updateAnimal(id, animalData) {
  return await Animal.findByIdAndUpdate(id, animalData);
}

module.exports = {
  create,
  details,
  getAnimal,
  deleteAnimal,
  updateAnimal,
};
