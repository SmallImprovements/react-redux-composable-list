import { noop } from './noop';

describe('noop', () => {
  it('returns an undefined because empty function', () => {
    const r = noop();
    expect(r).to.eql(undefined);
  });
});
