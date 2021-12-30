import { NumericLiteral } from '@babel/types';
import data from './data';
const { species, employees, prices, hours } = data;

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
const MAPS = ['NE', 'NW', 'SE', 'SW'];

interface optionsI {
  includeNames?: boolean,
  sex?: string,
  sorted?: boolean,
}

interface objOfArray {
  [key: string]: (string[] | { [key:string]: string[] }[]),
}

function getSpecieNameByMap(map: string) {
  return species.filter(({ location }) => map === location);
}

function getAllSpecieMap(): objOfArray  {
  return MAPS.reduce((acc: objOfArray, map): objOfArray => {
    acc[map] = getSpecieNameByMap(map).map(({ name }) => name);
    return acc;
  }, {});
}

function getResidentsNameByMap(map: string, sorted: boolean) {
  return getSpecieNameByMap(map)
  .reduce((acc: { [key:string]: string[] }[], { name, residents }) => {
    const result = residents.map(({ name }) => name);
    sorted && result.sort();

    acc.push({ [name]: result });
    return acc
  }, []);
}

function getResidentsNameBySex(map: string, animalSex: string, sorted: boolean) {
  return getSpecieNameByMap(map)
  .reduce((acc: { [key:string]: string[] }[], { name, residents }) => {
    const result = residents.filter(({ sex }) => sex === animalSex)
    .map(({ name }) => name);
    sorted && result.sort();

    acc.push({ [name]: result });
    return acc
  }, []);
}

function getSpecifiedAnimalMap(options: optionsI): objOfArray {
  const { sex, sorted } = options;
  
  return MAPS.reduce((acc: objOfArray, map): objOfArray => {
    acc[map] = sex ? getResidentsNameBySex(map, sex, sorted) : getResidentsNameByMap(map, sorted);
    return acc;
  }, {});
}

function getAnimalMap(options?: optionsI): objOfArray {
  if(!options || !options.includeNames) {
    return getAllSpecieMap();
  }

  return getSpecifiedAnimalMap(options);
}

// Desafio 10:
function setDaySchedule() {
  return Object.entries(hours).reduce((acc: { [key:string]: string }, day) => {
    const [dayName, { open, close }] = day;
    acc[dayName] = open === 0 ? 'CLOSED' : `Open from ${open}am until ${close - 12}pm`;
    return acc;
  }, {});
}

function getSchedule(dayName?: string): { [key:string]: string } {
  return dayName ? { [dayName]: setDaySchedule()[dayName] } : setDaySchedule();
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
