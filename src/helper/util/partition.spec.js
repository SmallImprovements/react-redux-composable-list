import { partition } from './partition';

const DATA_ONE = [
  'foo',
  'bar',
  'zoo',
];

describe('partition', () => {
  it('returns a partition', () => {
    const [ r0, r1 ] = partition(DATA_ONE, name => name === 'foo');
    expect(r0).to.eql(['foo']);
    expect(r1).to.eql(['bar', 'zoo']);
  });
});
