import data from './data';
const { species, employees } = data;

// Desafio 01:
function getSpeciesByIds(...ids: string[]) {
  if(ids.length > 0) {
    return ids.map((id) => {
      return (species.find((specie) => specie.id === id));
    });
  }
  return [];
}

// Desafio 02:
function getAnimalsOlderThan(animal: string, age: number): boolean {
  return species.find(({ name }) => name === animal).residents
  .every((anim) => anim.age >= age);
}

// Desafio 03:
interface employeeObj {
  id: string,
  firstName: string,
  lastName: string,
  managers: string[],
  responsibleFor: string[],
}

function getEmployeeByName(employeeName?: string): (employeeObj | object) {
  if(employeeName) {
    return employees
    .find(({ firstName, lastName }) => [firstName, lastName].includes(employeeName));
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

export {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
