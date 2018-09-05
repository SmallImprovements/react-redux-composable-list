import deepFreeze from 'deep-freeze';
import { reducers, actionCreators } from '../filter';

const STATE_KEY = 'SOME_KEY';

describe('filter', () => {
  describe('FILTER_SET', () => {
    it('sets a filter', () => {
      const key = 'name';
      const fn = foo => foo;
      const previousState = {};
      const expectedState = { [STATE_KEY]: { [key]: fn } };
      const action = actionCreators.doSetFilter(STATE_KEY, key, fn);
      deepFreeze(action);
      deepFreeze(previousState);
      expect(reducers.tableFilter(previousState, action)).to.eql(expectedState);
    });

    it('sets a second filter', () => {
      const keyOne = 'name';
      const fnOne = foo => foo;
      const keyTwo = 'age';
      const fnTwo = bar => bar;
      const previousState = {
        [STATE_KEY]: {
          [keyOne]: fnOne,
        }
      };
      const expectedState = {
        [STATE_KEY]: {
          [keyOne]: fnOne,
          [keyTwo]: fnTwo,
        }
      };
      const action = actionCreators.doSetFilter(STATE_KEY, keyTwo, fnTwo);
      deepFreeze(action);
      deepFreeze(previousState);
      expect(reducers.tableFilter(previousState, action)).to.eql(expectedState);
    });
  });

  describe('FILTER_REMOVE', () => {
    it('removes a filter', () => {
      const keyOne = 'name';
      const fnOne = foo => foo;
      const keyTwo = 'age';
      const fnTwo = bar => bar;
      const previousState = {
        [STATE_KEY]: {
          [keyOne]: fnOne,
          [keyTwo]: fnTwo,
        }
      };
      const expectedState = {
        [STATE_KEY]: {
          [keyOne]: fnOne,
        }
      };
      const action = actionCreators.doRemoveFilter(STATE_KEY, keyTwo);
      deepFreeze(action);
      deepFreeze(previousState);
      expect(reducers.tableFilter(previousState, action)).to.eql(expectedState);
    });
  });

  describe('FILTER_RESET', () => {
    it('resets all filters', () => {
      const keyOne = 'name';
      const fnOne = foo => foo;
      const keyTwo = 'age';
      const fnTwo = bar => bar;
      const previousState = {
        [STATE_KEY]: {
          [keyOne]: fnOne,
          [keyTwo]: fnTwo,
        }
      };
      const expectedState = {
        [STATE_KEY]: [],
      };
      const action = actionCreators.doResetFilter(STATE_KEY);
      deepFreeze(action);
      deepFreeze(previousState);
      expect(reducers.tableFilter(previousState, action)).to.eql(expectedState);
    });
  });
});
