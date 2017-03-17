import { reducers, actionTypes } from '../select';

const STATE_KEY = 'someKey';

describe('select', () => {
  describe('toggleItem()', () => {
    it('toggles a single item as selected', () => {
      const id = 'x';

      const action = {
        type: actionTypes.SELECT_ITEM,
        payload: {
          stateKey: STATE_KEY,
          id
        }
      };

      const expectedState = { [STATE_KEY]: [id] };

      expect(reducers.tableSelect({}, action)).to.eql(expectedState);
    });

    it('toggles a single item as unselected, when it was already selected', () => {
      const id = 'x';

      const action = {
        type: actionTypes.SELECT_ITEM,
        payload: {
          stateKey: STATE_KEY,
          id
        }
      };

      const previousState = { [STATE_KEY]: [id] };
      const expectedState = { [STATE_KEY]: [] };

      expect(reducers.tableSelect(previousState, action)).to.eql(expectedState);
    });
  });

  describe('toggleItems()', () => {
    it('toggles multiple items as selected', () => {
      const ids = ['x', 'y'];

      const action = {
        type: actionTypes.SELECT_ITEMS,
        payload: {
          stateKey: STATE_KEY,
          ids,
          isSelect: true
        }
      };

      const expectedState = { [STATE_KEY]: ids };

      expect(reducers.tableSelect({}, action)).to.eql(expectedState);
    });

    it('toggles multiple items as selected, but uniques them', () => {
      const ids = ['x', 'y'];

      const action = {
        type: actionTypes.SELECT_ITEMS,
        payload: {
          stateKey: STATE_KEY,
          ids,
          isSelect: true
        }
      };

      const previousState = { [STATE_KEY]: ['x'] };
      const expectedState = { [STATE_KEY]: ids };

      expect(reducers.tableSelect(previousState, action)).to.eql(expectedState);
    });

    it('toggles multiple items as unselected', () => {
      const ids = ['x', 'y'];

      const action = {
        type: actionTypes.SELECT_ITEMS,
        payload: {
          stateKey: STATE_KEY,
          ids,
          isSelect: false
        }
      };

      const previousState = { [STATE_KEY]: ids };
      const expectedState = { [STATE_KEY]: [] };

      expect(reducers.tableSelect(previousState, action)).to.eql(expectedState);
    });
  });

  describe('resetSelectedItems()', () => {
    it('resets all items that nothing is selected anymore', () => {
      const ids = ['x', 'y'];

      const action = {
        type: actionTypes.SELECT_ITEMS_RESET,
        payload: {
          stateKey: STATE_KEY,
        }
      };

      const previousState = { [STATE_KEY]: ids };
      const expectedState = { [STATE_KEY]: [] };

      expect(reducers.tableSelect(previousState, action)).to.eql(expectedState);
    });
  });
});
