import data from './data';
const { species, employees, prices } = data;

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

interface entrantsParam {
  Adult?: number,
  Senior?: number,
  Child?: number,
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

// Desafio 06:
function addEmployee(id: string, firstName: string, lastName: string, managers: string[] = [], responsibleFor: string[] = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

// Desafio 07:
function countAnimals(specieName?: string): (number | { [key: string]: number }) {
  if(specieName) {
    return species.find((specie) => specie.name === specieName).residents.length;
  }
  const result = {};
  species.forEach(({ name, residents }) => {
    result[name] = residents.length;
  });

  return result;
}

// Desafio 08:
function calculateEntry(entrants?: entrantsParam): number {
  if(entrants) {
    const { Adult: adultPrice, Senior: seniorPrice, Child: childPrice } = prices;
    const { Adult, Senior, Child } = entrants;
    const adultValue = Adult ? (Adult * adultPrice) : 0;
    const seniorValue = Senior ? (Senior * seniorPrice) : 0;
    const childValue = Child ? (Child * childPrice) : 0;
    return (adultValue + seniorValue + childValue);
  }
  return 0;
}

// Desafio 09:
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
