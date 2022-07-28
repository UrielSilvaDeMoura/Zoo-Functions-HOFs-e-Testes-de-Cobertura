const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const nomeColaborador = employeeName;
  return data.employees.find((colaborador) =>
    colaborador.firstName === nomeColaborador || colaborador.lastName === nomeColaborador);
}

module.exports = getEmployeeByName;
