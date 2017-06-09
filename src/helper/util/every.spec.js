import { every } from './every';

const DATA_ONE = [
  true,
  false,
];

const DATA_TWO = [
  true,
  true,
];

describe('every', () => {
  it('return true if all items are true', () => {
    const r = every(DATA_TWO, boolean => boolean);
    expect(r).to.be.true;
  });

  it('return false if at least one item is false', () => {
    const r = every(DATA_ONE, boolean => boolean);
    expect(r).to.be.false;
  });
});
