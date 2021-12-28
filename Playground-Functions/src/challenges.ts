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
function catAndMouse(mouse: number, cat1: number, cat2: number ): string {
  const cat1Distance = Math.abs(mouse - cat1);
  const cat2Distance = Math.abs(mouse - cat2);
  if(cat1Distance < cat2Distance) {
    return 'cat1';
  } else if(cat1Distance > cat2Distance) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbers: number[]): string[] {
  return numbers.map((value) => {
    if(value % 3 === 0 && value % 5 === 0) {
      return 'fizzBuzz';
    } else if (value % 3 === 0) {
      return 'fizz';
    } else if (value % 5 === 0) {
      return 'buzz';
    }
    return 'bug!';
  });
}

// Desafio 9
function encode(text: string) {
  const vogals : { [key: string]: number } = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  return text.split('')
  .map((letter) => vogals[letter] ? vogals[letter] : letter )
  .join('');
}

function decode(text: string) {
  const vogals : { [key: (string | number)]: string } = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  return text.split('')
  .map((letter) => vogals[letter] ? vogals[letter] : letter )
  .join('');
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
