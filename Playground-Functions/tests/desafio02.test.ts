import { calcArea } from '../src/challenges';

describe('Testa função que calcula a área do triângulo', () => {
  it('Retorna o valor 250 quando a funcão calcArea é chamada com o parâmetro base com o valor 10 e o parâmetro height com o valor 50', () => {
    expect(calcArea(10, 50)).toBe(250);
  });

  it('Retorna o valor 5 quando a funcão calcArea é chamada com o parâmetro base com o valor 5 e o parâmetro height com o valor 2 espera-se como resultado 5', () => {
    expect(calcArea(5, 2)).toBe(5);
  });

  it('Retorna o valor 25.5 quando a funcão calcArea é chamada com o parâmetro base com o valor 51 e o parâmetro height com o valor 1 espera-se como resultado 25.5', () => {
    expect(calcArea(51, 1)).toBe(25.5);
  });
});