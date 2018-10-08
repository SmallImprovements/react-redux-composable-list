import deepFreeze from 'deep-freeze';
import { reducers, actionCreators } from '../select';

const STATE_KEY = 'SOME_KEY';

describe('select', () => {
  describe('SELECT_ITEM', () => {
    it('toggles a single item as selected', () => {
      const id = 'x';
      const previousState = {};
      const expectedState = { [STATE_KEY]: { selectedItems: [id], lastSelectedItem: id, lastUnselectedItem: null } };
      const action = actionCreators.doSelectItem(STATE_KEY, id);
      deepFreeze(action);
      deepFreeze(previousState);
      expect(reducers.tableSelect(previousState, action)).to.eql(expectedState);
    });

    it('updates the last selected item when selecting another item', () => {
      const previousState = { [STATE_KEY]: { selectedItems: ['x'], lastSelectedItem: 'x', lastUnselectedItem: null } };
      const expectedState = { [STATE_KEY]: { selectedItems: ['x', 'y'], lastSelectedItem: 'y', lastUnselectedItem: null } };
      const action = actionCreators.doSelectItem(STATE_KEY, 'y');
      deepFreeze(action);
      deepFreeze(previousState);
      expect(reducers.tableSelect(previousState, action)).to.eql(expectedState);
    });

    it('clears the last selected item when unselecting an item', () => {
      const previousState = { [STATE_KEY]: { selectedItems: ['x', 'y'], lastSelectedItem: 'x', lastUnselectedItem: null } };
      const expectedState = { [STATE_KEY]: { selectedItems: ['x'], lastSelectedItem: null, lastUnselectedItem: 'y' } };
      const action = actionCreators.doSelectItem(STATE_KEY, 'y');
      deepFreeze(action);
      deepFreeze(previousState);
      expect(reducers.tableSelect(previousState, action)).to.eql(expectedState);
    });

    it('toggles a single item as unselected, when it was already selected', () => {
      const id = 'x';
      const previousState = { [STATE_KEY]: { selectedItems: [id], lastSelectedItem: id, lastUnselectedItem: null } };
      const expectedState = { [STATE_KEY]: { selectedItems: [], lastSelectedItem: null, lastUnselectedItem: id } };
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
      const expectedState = { [STATE_KEY]: { selectedItems: ids, lastSelectedItem: null } };
      const action = actionCreators.doSelectItems(STATE_KEY, ids, true);
      deepFreeze(action);
      deepFreeze(previousState);
      expect(reducers.tableSelect(previousState, action)).to.eql(expectedState);
    });

    it('toggles multiple items as selected, but uniques them', () => {
      const ids = ['x', 'y'];
      const previousState = { [STATE_KEY]: { selectedItems: ['x'], lastSelectedItem: null } };
      const expectedState = { [STATE_KEY]: { selectedItems: ids, lastSelectedItem: null } };
      const action = actionCreators.doSelectItems(STATE_KEY, ids, true);
      deepFreeze(action);
      deepFreeze(previousState);
      expect(reducers.tableSelect(previousState, action)).to.eql(expectedState);
    });

    it('toggles multiple items as unselected', () => {
      const ids = ['x', 'y'];
      const previousState = { [STATE_KEY]: { selectedItems: ids, lastSelectedItem: 'y' } };
      const expectedState = { [STATE_KEY]: { selectedItems: [], lastSelectedItem: null } };
      const action = actionCreators.doSelectItems(STATE_KEY, ids, false);
      deepFreeze(action);
      deepFreeze(previousState);
      expect(reducers.tableSelect(previousState, action)).to.eql(expectedState);
    });
  });

  describe('SELECT_ITEMS_RANGE', () => {
    it('selects a range of items when shift-clicking a second item', () => {
      const allIds = ['v', 'w', 'x', 'y', 'z'];
      const previousState = { [STATE_KEY]: { selectedItems: ['w'], lastSelectedItem: 'w' } };
      const expectedState = { [STATE_KEY]: { selectedItems: ['w', 'x', 'y'], lastSelectedItem: 'w' } };
      const action = actionCreators.doSelectItemsRange(STATE_KEY, 'y', allIds);
      deepFreeze(action);
      deepFreeze(previousState);
      expect(reducers.tableSelect(previousState, action)).to.eql(expectedState);
    });

    it('selects a single item when shift-clicking a single item without a previously-selected item', () => {
      const allIds = ['v', 'w', 'x', 'y', 'z'];
      const previousState = { [STATE_KEY]: { selectedItems: [], lastSelectedItem: null } };
      const expectedState = { [STATE_KEY]: { selectedItems: ['w'], lastSelectedItem: 'w' } };
      const action = actionCreators.doSelectItemsRange(STATE_KEY, 'w', allIds);
      deepFreeze(action);
      deepFreeze(previousState);
      expect(reducers.tableSelect(previousState, action)).to.eql(expectedState);
    });

    it('unselects a range when shift-clicking an already-selected item', () => {
      const allIds = ['v', 'w', 'x', 'y', 'z'];
      const previousState = { [STATE_KEY]: { selectedItems: ['x', 'y', 'z'], lastUnselectedItem: 'w' } };
      const expectedState = { [STATE_KEY]: { selectedItems: ['z'], lastUnselectedItem: 'w' } };
      const action = actionCreators.doSelectItemsRange(STATE_KEY, 'y', allIds);
      deepFreeze(action);
      deepFreeze(previousState);
      expect(reducers.tableSelect(previousState, action)).to.eql(expectedState);
    });
  });

  describe('SELECT_ITEMS_EXCLUSIVELY', () => {
    it('toggles multiple items as selected but exclusively', () => {
      const ids = ['x', 'y'];
      const previousState = { [STATE_KEY]: { selectedItems: ['z'], lastSelectedItem: null } };
      const expectedState = { [STATE_KEY]: { selectedItems: ids, lastSelectedItem: null } };
      const action = actionCreators.doSelectItemsExclusively(STATE_KEY, ids, true);
      deepFreeze(action);
      deepFreeze(previousState);
      expect(reducers.tableSelect(previousState, action)).to.eql(expectedState);
    });
  });

  describe('SELECT_ITEMS_RESET', () => {
    it('resets all items that nothing is selected anymore', () => {
      const ids = ['x', 'y'];
      const previousState = { [STATE_KEY]: { selectedItems: ids, lastSelectedItem: 'x' } };
      const expectedState = { [STATE_KEY]: { selectedItems: [], lastSelectedItem: null } };
      const action = actionCreators.doSelectItemsReset(STATE_KEY);
      deepFreeze(action);
      deepFreeze(previousState);
      expect(reducers.tableSelect(previousState, action)).to.eql(expectedState);
    });
  });
});
