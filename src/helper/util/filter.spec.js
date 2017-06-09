import { filter } from './filter';

const DATA_ONE = [
  true,
  false,
];

describe('filter', () => {
  it('return a filtered list', () => {
    const r = filter(DATA_ONE, boolean => boolean);
    expect(r).to.eql([true]);
  });
});
