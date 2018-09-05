import { uniq } from '../../helper/util/uniq';

import { applyResetByStateKeys, RESET_BY_STATE_KEYS } from '../reset';

const SLICE_NAME = 'tableSelect';

const SELECT_ITEM = `${SLICE_NAME}/SELECT_ITEM`;
const SELECT_ITEMS = `${SLICE_NAME}/SELECT_ITEMS`;
const SELECT_ITEMS_EXCLUSIVELY = `${SLICE_NAME}/SELECT_ITEMS_EXCLUSIVELY`;
const SELECT_ITEMS_RESET = `${SLICE_NAME}/SELECT_ITEMS_RESET`;

const INITIAL_STATE = {};

function doSelectItem(stateKey, id, allIds, event) {
  return {
    type: SELECT_ITEM,
    payload: {
      stateKey,
      id,
      allIds,
      event,
    }
  };
}

function doSelectItems(stateKey, ids, isSelect) {
  return {
    type: SELECT_ITEMS,
    payload: {
      stateKey,
      ids,
      isSelect,
    }
  };
}

function doSelectItemsExclusively(stateKey, ids, isSelect) {
  return {
    type: SELECT_ITEMS_EXCLUSIVELY,
    payload: {
      stateKey,
      ids,
      isSelect,
    }
  };
}

function doSelectItemsReset(stateKey) {
  return {
    type: SELECT_ITEMS_RESET,
    payload: {
      stateKey,
    }
  };
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_ITEM:
      return applyToggleItem(state, action);
    case SELECT_ITEMS:
      return applyToggleItems(state, action);
    case SELECT_ITEMS_EXCLUSIVELY:
      return applyToggleItemsExclusively(state, action);
    case SELECT_ITEMS_RESET:
      return applyResetSelectedItems(state, action);
    case RESET_BY_STATE_KEYS:
      return applyResetByStateKeys(state, action);
  }
  return state;
};

function applyToggleItem(state, action) {
  const { stateKey, id, event, allIds } = action.payload;
  const currentSelection = state[stateKey] && state[stateKey].selectedItems ?
    state[stateKey].selectedItems :
    [];
  const index = currentSelection.indexOf(id);
  const isAlreadySelected = index !== -1;
  if (!isAlreadySelected && allIds && allIds.length && event && event.shiftKey) {
    const lastSelectedItem = state[stateKey].lastSelectedItem || id;
    const selectedRange = getSelectedRange(allIds, id, lastSelectedItem);
    const selectedItems = uniq([...currentSelection, ...selectedRange]);
    return { ...state, [stateKey]: { selectedItems, lastSelectedItem } };
  }
  const selectedItems = isAlreadySelected
    ? removeItem(currentSelection, index)
    : addItem(currentSelection, id);
  const lastSelectedItem = isAlreadySelected
    ? state[stateKey].lastSelectedItem
    : id;
  return { ...state, [stateKey]: { selectedItems, lastSelectedItem } };
}

function getSelectedRange(allIds, id, lastSelectedItem) {
  const lastSelectedItemIndex = allIds.indexOf(lastSelectedItem);
  const currentSelectedItemIndex = allIds.indexOf(id);
  const firstIndex = Math.min(lastSelectedItemIndex, currentSelectedItemIndex);
  const lastIndex = Math.max(lastSelectedItemIndex, currentSelectedItemIndex);
  return allIds.slice(firstIndex, lastIndex + 1);
}

function applyToggleItems(state, action) {
  return toggleItems(state, action, false);
}

function applyToggleItemsExclusively(state, action) {
  return toggleItems(state, action, true);
}

function toggleItems(state, action, selectExclusively) {
  let { stateKey, isSelect, ids } = action.payload;
  let list = state[stateKey] && state[stateKey].selectedItems ?
    state[stateKey].selectedItems :
    [];
  let selectedItems;

  if (isSelect) {
    selectedItems = uniq(selectExclusively ? ids : [...list, ...ids]);
  } else {
    selectedItems = removeItems(list, ids);
  }

  return { ...state, [stateKey]: { selectedItems, lastSelectedItem: null } };
}

function applyResetSelectedItems(state, action) {
  const { stateKey } = action.payload;
  return { ...state, [stateKey]: { selectedItems: [], lastSelectedItem: null } };
}

function removeItems(list, ids) {
  return ids.reduce((result, value) => {
    let index = result.indexOf(value);
    result = (index !== -1) ? removeItem(result, index) : result;
    return result;
  }, list);
}

function removeItem(list, index) {
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ];
}

function addItem(list, id) {
  return [...list, id];
}

function getSelection(state, stateKey) {
  return state[SLICE_NAME][stateKey] && state[SLICE_NAME][stateKey].selectedItems ?
    state[SLICE_NAME][stateKey].selectedItems :
    [];
}

function getLastSelectedItem(state, stateKey) {
  return state[SLICE_NAME][stateKey].lastSelectedItem;
}

function getIsSelected(state, stateKey, id) {
  return getSelection(state, stateKey).indexOf(id) !== -1;
}

const selectors = {
  getSelection,
  getLastSelectedItem,
  getIsSelected
};

const actionCreators = {
  doSelectItem,
  doSelectItems,
  doSelectItemsExclusively,
  doSelectItemsReset
};

const reducers = { [SLICE_NAME]: reducer };

const actionTypes = {
  SELECT_ITEM,
  SELECT_ITEMS,
  SELECT_ITEMS_EXCLUSIVELY,
  SELECT_ITEMS_RESET
};

export {
  reducers,
  selectors,
  actionCreators,
  actionTypes
};
