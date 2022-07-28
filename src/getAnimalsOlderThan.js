const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const especieAnimal = data.species.find((especie) => especie.name === animal);
  return especieAnimal.residents.every((idade) => idade.age >= age);
}

module.exports = getAnimalsOlderThan;
