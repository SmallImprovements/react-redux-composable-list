import { find } from './find';

const DATA_ONE = [
  'foo',
  'bar',
];

describe('find', () => {
  it('returns a matching item', () => {
    const r = find(DATA_ONE, name => name === 'foo');
    expect(r).to.eql('foo');
  });
});
