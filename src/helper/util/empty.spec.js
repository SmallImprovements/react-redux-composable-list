import { isEmpty } from './empty';

describe('empty', () => {
  it('return true when object is empty', () => {
    const r = isEmpty({});
    expect(r).to.be.true;
  });

  it('return false when object is not empty', () => {
    const r = isEmpty({ a: 1 });
    expect(r).to.be.false;
  });
});
