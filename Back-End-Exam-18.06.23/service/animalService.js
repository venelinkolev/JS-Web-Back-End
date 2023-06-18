const Animal = require('../models/Animal');

async function create(animal, owner) {
  const { name, years, kind, imageUrl, needs, location, description } = animal;

  const newAnimal = await Animal.create({
    name,
    years,
    kind,
    imageUrl,
    needs,
    location,
    description,
    owner,
  });
  console.log(newAnimal);
}

function details(id) {
  const animal = Animal.findById(id);

  //console.log('First', cube);
  return animal;
}

async function getAllAnimals() {
  return await Animal.find({}).lean();
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

async function donation(animalId, ownewId) {
  const currentAnimal = await Animal.findById(animalId);
  currentAnimal.donation.push(ownewId);

  currentAnimal.save();
}

module.exports = {
  create,
  details,
  getAnimal,
  deleteAnimal,
  updateAnimal,
  getAllAnimals,
  donation,
};
