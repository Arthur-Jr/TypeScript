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

// Desafio 10
interface TechsReturn {
  tech: string,
  name: string,
}

function techList(techs: string[], name: string): (TechsReturn[] | string ) {
  if (techs.length > 0) {
    return techs.map((tech) => ({ tech, name }))
    .sort((a, b) => {
      if(a.tech > b.tech) {
        return 1;
      } else if (a.tech < b.tech) {
        return -1;
      }
      return 0;
    });
  }
  return 'Vazio!';
}

// Desafio 11
function checkNumbers(numbers: number[]) : boolean {
  const repeat = numbers.reduce((acc, cur) => {
    const repeatCount = numbers.filter((num) => num === cur).length;
    if(repeatCount >= 3) {
      return acc + repeatCount;
    }
    return acc;
  }, 0);

  if(numbers.some((num) => num < 0 || num > 9) || repeat >= 3) {
    return true;
  }
  return false;
}

function generatePhoneNumber(numbers: number[]): string {
  if(numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else if(checkNumbers(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores.';
  }

  return numbers.map((num, index) => {
    if(index === 0) {
      return `(${num}`;
    } else if(index === 1) {
      return `${num}) `;
    } else if(index === 6) {
      return `${num}-`
    }
    return num;
  }).join('');
}

// Desafio 12
function triangleCheck(lineA: number, lineB: number, lineC: number): boolean {
  const numbers = [lineA, lineB, lineC]
  return numbers.some((value) => {
    const others = numbers.filter((num) => value !== num);
    const sum = others.reduce((acc, cur) => acc + cur, 0);
    const sub = Math.abs(others.reduce((acc, cur) => acc - cur));
    return value < sum && value > sub;
  });
}

// Desafio 13
function hydrate(text: string) {
  const r = /\d+/g;
  const quantity = text.match(r);
  let result = 0;
  if(quantity) {
    result = quantity.map((num) => parseInt(num, 10))
    .reduce((acc, cur) => acc + cur);
  }

  return result > 1 ? `${result} copos de água` : `${result} copo de água`;
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
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
