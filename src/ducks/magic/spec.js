import deepFreeze from 'deep-freeze';
import { reducers, actionTypes, actionCreators } from '../magic';

const STATE_KEY = 'SOME_KEY';

describe('magic', () => {
  describe('TABLE_SET_MAGIC', () => {
    it('sets a magic column sort', () => {
      const sortKey = 'name';
      const previousState = {};
      const expectedState = { [STATE_KEY]: sortKey };
      const action = actionCreators.doSetMagicSort(STATE_KEY, sortKey);
      deepFreeze(action);
      deepFreeze(previousState);
      expect(reducers.tableMagicSort(previousState, action)).to.eql(expectedState);
    });
  });
});
