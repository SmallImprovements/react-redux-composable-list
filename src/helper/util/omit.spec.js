import { omit } from './omit';

const DATA_ONE = {
  foo: 'foo',
  bar: 'bar',
};

describe('omit', () => {
  it('return the object with an omitted key', () => {
    const r = omit(DATA_ONE, 'foo');
    expect(r).to.eql({ bar: 'bar' });
  });
});
