import { eachContains, checkIfWinner } from './utils';

const threeCoffeeArray = ['coffee bar', 'coffee baz', 'baz coffee'];
const twoTeaArray = ['coffee bar', 'tea baz', 'tea coffee'];

describe('eachContains', () => {
  it('should be true if each element contains a shared word', () => {
    expect(eachContains(threeCoffeeArray, 'coffee')).toBe(true);
  });

  it('should be true if each element contains a shared word', () => {
    const targetArray = ['coffee bar', 'coffee baz', 'baz coffee'];
    expect(eachContains(threeCoffeeArray, 'baz')).toBe(false);
  });
});

describe('checkIfWinner', () => {
  it('should be true if the array contains any triplets', () => {
    expect(checkIfWinner(threeCoffeeArray)).toBe(true);
  });

  it('should be false if the array does not contains any triplets', () => {
    expect(checkIfWinner(twoTeaArray)).toBe(false);
  });
});
