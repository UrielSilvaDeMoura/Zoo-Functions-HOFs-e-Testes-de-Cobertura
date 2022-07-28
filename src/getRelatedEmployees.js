const data = require('../data/zoo_data');

function isManager(id) {
  if (data.employees.find((gerente) => gerente.managers.find((cargo) => cargo === id))) {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const colaboradores = data.employees.filter((colaborador) =>
    colaborador.managers.includes(managerId));
  const nomeColaboradores = colaboradores.map((colaborador) =>
    `${colaborador.firstName} ${colaborador.lastName}`);
  return nomeColaboradores;
}

module.exports = { isManager, getRelatedEmployees };
