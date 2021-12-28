// Desafio 1
function compareTrue(value1: boolean, value2: boolean) {
  if(value1 && value2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base: number, height: number) {
  return (base * height / 2);
}

// Desafio 3
function splitSentence(sentence: string) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(colection: string[]) {
  return `${colection[colection.length - 1]}, ${colection[0]}`
}

// Desafio 5
function footballPoints(wins: number, ties: number) {
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
function highestCount(colections: number[]) {
  const highestNumber = colections.reduce((acc, cur) => (acc < cur ? cur : acc));
  return colections.filter((item: number) => item === highestNumber).length;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

export {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
