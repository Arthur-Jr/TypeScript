import assert from 'assert';
import * as zoo from '../src/zoo';

describe('Testa a função isManager', () => {
  it('Testa se o id passado é de um gerente', () => {
    let actual = zoo.isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
    let expected = false;
    assert.deepStrictEqual(actual, expected);

    actual = zoo.isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83');
    expected = true;
    assert.deepStrictEqual(actual, expected);
  });
});
