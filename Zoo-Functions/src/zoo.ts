import data from './data';
const { species, employees } = data;

interface employeeObj {
  id: string,
  firstName: string,
  lastName: string,
  managers: string[],
  responsibleFor: string[],
}

interface employeePersonal {
  id: string,
  firstName: string,
  lastName: string,
}

interface employeeWork {
  managers: string[],
  responsibleFor: string[],
}

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
function getEmployeeByName(employeeName?: string): (employeeObj | object) {
  if(employeeName) {
    return employees
    .find(({ firstName, lastName }) => [firstName, lastName].includes(employeeName));
  }
  return {};
}

// Desafio 04:
function createEmployee(personalInfo: employeePersonal, associatedWith: employeeWork): employeeObj {
  return { ...personalInfo, ...associatedWith };
}

// Desafio 05:
function isManager(id: string): boolean {
  const result = employees
  .map(({ managers }) => managers.some((manager) => manager === id));

  return result.some((r) => r === true);
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
