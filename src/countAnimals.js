const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const quant = {};
    data.species.forEach((specie) => {
      quant[specie.name] = specie.residents.length;
    });
    return quant;
  }
  const nomeAnimal = data.species.find((especieDoAnimal) => especieDoAnimal.name === animal.specie);

  if (animal.sex) {
    const sexoAnimal = nomeAnimal.residents.filter((sexoDoAnimal) =>
      sexoDoAnimal.sex === animal.sex);
    return sexoAnimal.length;
  }
  return nomeAnimal.residents.length;
}

module.exports = countAnimals;
