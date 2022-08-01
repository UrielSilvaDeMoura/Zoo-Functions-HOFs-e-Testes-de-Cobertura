const data = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');

function cronograma() {
  const dia = {};
  Object.keys(hours).forEach((week) => {
    if (week !== 'Monday') {
      dia[week] = {
        officeHour: `Open from ${hours[week].open}am until ${hours[week].close}pm`,
        exhibition: species
          .filter((animal) => animal.availability.includes(week))
          .map((animal) => animal.name),
      };
    } else {
      dia[week] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });
  return dia;
}

function diaSemana(dia) {
  const day = {};
  if (dia !== 'Monday') {
    day[dia] = {
      officeHour: `Open from ${hours[dia].open}am until ${hours[dia].close}pm`,
      exhibition: species
        .filter((animal) => animal.availability.includes(dia))
        .map((animal) => animal.name),
    };
  } else {
    day[dia] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  }
  return day;
}

function procuraAnimal(nomeAnimal) {
  const disponibilidade = species.find(({ name }) => nomeAnimal === name);
  const { availability } = disponibilidade;
  return availability;
}

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return cronograma();
  }
  if (Object.values(species).some((nome) => nome.name === scheduleTarget)) {
    return procuraAnimal(scheduleTarget);
  }
  if (Object.keys(hours).some((diaProcurado) => diaProcurado === scheduleTarget)) {
    return diaSemana(scheduleTarget);
  }
  return cronograma();
}

module.exports = getSchedule;
