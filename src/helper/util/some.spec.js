import { some } from './some';

const DATA_ONE = [
  true,
  false,
];

const DATA_TWO = [
  false,
  false,
];

describe('some', () => {
  it('return true if at least one item is true', () => {
    const r = some(DATA_ONE, boolean => boolean);
    expect(r).to.be.true;
  });

  it('return false if no item is true', () => {
    const r = some(DATA_TWO, boolean => boolean);
    expect(r).to.be.false;
  });
});
