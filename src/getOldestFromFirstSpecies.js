const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const responsavel = data.employees.find((colaborador) => colaborador.id === id).responsibleFor[0];
  const animalColaborador = data.species.filter((animal) => animal.id === responsavel);
  const animalMaisVelho = animalColaborador[0].residents.reduce((acc, curr) => {
    if (acc.age > curr.age) {
      return acc;
    }
    return curr;
  });

  const { name, sex, age } = animalMaisVelho;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
