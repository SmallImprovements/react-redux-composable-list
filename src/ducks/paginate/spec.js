import deepFreeze from 'deep-freeze';
import { reducers, actionTypes, actionCreators } from '../paginate';

const STATE_KEY = 'SOME_KEY';

describe('pagination', () => {
  describe('PAGINATION_SET', () => {
    it('sets a page', () => {
      const page = 5;
      const previousState = {};
      const expectedState = { [STATE_KEY]: page };
      const action = actionCreators.doSetPage(STATE_KEY, page);
      deepFreeze(action);
      deepFreeze(previousState);
      expect(reducers.tablePaginate(previousState, action)).to.eql(expectedState);
    });
  });
});
