import { highestCount } from '../src/challenges';

describe('Testa a função que calcula a repetição do maior número', () => {
  it('Retorna 2 quando o parâmetro passado na funcão highestCount seja [1, 9, 2, 3, 9, 5, 7]', () => {
    expect(highestCount([1, 9, 2, 3, 9, 5, 7])).toBe(2);
  });

  it('Retorna 1 quando o parâmetro passado na funcão highestCount seja [0, 4, 4, 4, 9, 2, 1]', () => {
    expect(highestCount([0, 4, 4, 4, 9, 2, 1])).toBe(1);
  });

  it('Retorna 1 quando o parâmetro passado na funcão highestCount seja [-2, -2, -1]', () => {
    expect(highestCount([-2, -2, -1])).toBe(1);
  });

  it('Retorna 3 quando o parâmetro passado na funcão highestCount seja [0, 0, 0]', () => {
    expect(highestCount([0, 0, 0])).toBe(3);
  });
});
