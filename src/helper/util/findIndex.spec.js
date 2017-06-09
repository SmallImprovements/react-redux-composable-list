import { findIndex } from './findIndex';

const DATA_ONE = [
  'foo',
  'bar',
];

describe('findIndex', () => {
  it('returns a matching index of an item', () => {
    const r = findIndex(DATA_ONE, name => name === 'bar');
    expect(r).to.eql(1);
  });
});
