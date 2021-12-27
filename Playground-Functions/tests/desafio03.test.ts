import { splitSentence } from '../src/challenges';

describe('Testa a função que divida a frase', () => {
  it('Retorna o valor [\'go\', \'Trybe\'] se a função receber a string \'go Trybe\'', () => {
    expect(splitSentence('go Trybe')).toEqual(['go', 'Trybe']);
  });

  it('Retorna o valor [\'vamo\', \'que\', \'vamo\']. se a função receber a string \'vamo que vamo\'', () => {
    expect(splitSentence('vamo que vamo')).toEqual(['vamo', 'que', 'vamo']);
  });

  it('Retorna o valor [\'foguete\'] se a função receber a string \'foguete\'', () => {
    expect(splitSentence('foguete')).toEqual(['foguete']);
  });
});