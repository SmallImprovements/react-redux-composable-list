import { uniq } from './uniq';

const DATA_ONE = [
  'foo',
  'bar',
  'bar',
];

describe('uniq', () => {
  it('returns a list of unique items', () => {
    const r = uniq(DATA_ONE);
    expect(r).to.eql(['foo', 'bar']);
  });
});
