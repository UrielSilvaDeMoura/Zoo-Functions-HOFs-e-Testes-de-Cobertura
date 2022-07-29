const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((pessoa) => pessoa.age < 18).length;
  const adult = entrants.filter((pessoa) => pessoa.age >= 18 && pessoa.age < 50).length;
  const senior = entrants.filter((pessoa) => pessoa.age >= 50).length;
  return {
    child,
    adult,
    senior,
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Array.isArray(entrants) !== true) return 0;
  const pessoas = countEntrants(entrants);
  const preço = data.prices;
  const ingressoCriança = pessoas.child * preço.child;
  const ingressoAdulto = pessoas.adult * preço.adult;
  const ingressoIdoso = pessoas.senior * preço.senior;
  const valorTotal = ingressoCriança + ingressoAdulto + ingressoIdoso;
  return valorTotal;
}

module.exports = { calculateEntry, countEntrants };
