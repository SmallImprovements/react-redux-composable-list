import { reducers, actionTypes } from '../paginate';

describe('pagination', () => {
  describe('setPage()', () => {

    it('sets a page in pagination', () => {
      const page = 5;
      const stateKey = 'x';

      const previousState = {};

      const action = {
        type: actionTypes.PAGINATION_SET,
        payload: {
          stateKey,
          page
        }
      };

      const expectedState = {
        [stateKey]: page
      };

      expect(reducers.tablePaginate(previousState, action)).to.eql(expectedState);
    });

  });
});
