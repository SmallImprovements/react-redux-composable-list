import deepFreeze from 'deep-freeze';
import { reducers, actionTypes, actionCreators } from '../select';

const STATE_KEY = 'SOME_KEY';

describe('select', () => {
  describe('SELECT_ITEM', () => {
    it('toggles a single item as selected', () => {
      const id = 'x';
      const previousState = {};
      const expectedState = { [STATE_KEY]: [id] };
      const action = actionCreators.doSelectItem(STATE_KEY, id);
      deepFreeze(action);
      deepFreeze(previousState);
      expect(reducers.tableSelect(previousState, action)).to.eql(expectedState);
    });

    it('toggles a single item as unselected, when it was already selected', () => {
      const id = 'x';
      const previousState = { [STATE_KEY]: [id] };
      const expectedState = { [STATE_KEY]: [] };
      const action = actionCreators.doSelectItem(STATE_KEY, id);
      deepFreeze(action);
      deepFreeze(previousState);
      expect(reducers.tableSelect(previousState, action)).to.eql(expectedState);
    });
  });

  describe('SELECT_ITEMS', () => {
    it('toggles multiple items as selected', () => {
      const ids = ['x', 'y'];
      const previousState = {};
      const expectedState = { [STATE_KEY]: ids };
      const action = actionCreators.doSelectItems(STATE_KEY, ids, true);
      deepFreeze(action);
      deepFreeze(previousState);
      expect(reducers.tableSelect(previousState, action)).to.eql(expectedState);
    });

    it('toggles multiple items as selected, but uniques them', () => {
      const ids = ['x', 'y'];
      const previousState = { [STATE_KEY]: ['x'] };
      const expectedState = { [STATE_KEY]: ids };
      const action = actionCreators.doSelectItems(STATE_KEY, ids, true);
      deepFreeze(action);
      deepFreeze(previousState);
      expect(reducers.tableSelect(previousState, action)).to.eql(expectedState);
    });

    it('toggles multiple items as unselected', () => {
      const ids = ['x', 'y'];
      const previousState = { [STATE_KEY]: ids };
      const expectedState = { [STATE_KEY]: [] };
      const action = actionCreators.doSelectItems(STATE_KEY, ids, false);
      deepFreeze(action);
      deepFreeze(previousState);
      expect(reducers.tableSelect(previousState, action)).to.eql(expectedState);
    });
  });

  describe('SELECT_ITEMS_EXCLUSIVELY', () => {
    it('toggles multiple items as selected but exclusively', () => {
      const ids = ['x', 'y'];
      const previousState = { [STATE_KEY]: ['z'] };
      const expectedState = { [STATE_KEY]: ids };
      const action = actionCreators.doSelectItemsExclusively(STATE_KEY, ids, true);
      deepFreeze(action);
      deepFreeze(previousState);
      expect(reducers.tableSelect(previousState, action)).to.eql(expectedState);
    });
  });

  describe('SELECT_ITEMS_RESET', () => {
    it('resets all items that nothing is selected anymore', () => {
      const ids = ['x', 'y'];
      const previousState = { [STATE_KEY]: ids };
      const expectedState = { [STATE_KEY]: [] };
      const action = actionCreators.doSelectItemsReset(STATE_KEY);
      deepFreeze(action);
      deepFreeze(previousState);
      expect(reducers.tableSelect(previousState, action)).to.eql(expectedState);
    });
  });
});
