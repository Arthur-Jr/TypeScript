import { concatName } from '../src/challenges';

describe('Testa a função que use concatenação de strings', () => {
  it('Retorna \'Paolillo, Lucas\' quando o parâmetro passado na funcão concatName seja [\'Lucas\', \'Cassiano\', \'Ferraz\', \'Paolillo\']', () => {
    expect(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])).toBe('Paolillo, Lucas');
  });

  it('Retorna \'ré, foguete\' quando o parâmetro passado na funcão concatName seja [\'foguete\', \'não\', \'tem\', \'ré\']', () => {
    expect(concatName(['foguete', 'não', 'tem', 'ré'])).toBe('ré, foguete');
  });

  it('Retorna \'captain, captain\' quando o parâmetro passado na funcão concatName seja [\'captain\', \'my\', \'captain\']', () => {
    expect(concatName(['captain', 'my', 'captain'])).toBe('captain, captain');
  });
});