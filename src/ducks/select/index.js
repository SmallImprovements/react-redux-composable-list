import { uniq, reduce, includes } from 'lodash';

import { applyResetByStateKeys, RESET_BY_STATE_KEYS } from '../reset';

const SLICE_NAME = 'tableSelect';

const SELECT_ITEM = `${SLICE_NAME}/SELECT_ITEM`;
const SELECT_ITEMS = `${SLICE_NAME}/SELECT_ITEMS`;
const SELECT_ITEMS_EXCLUSIVELY = `${SLICE_NAME}/SELECT_ITEMS_EXCLUSIVELY`;
const SELECT_ITEMS_RESET = `${SLICE_NAME}/SELECT_ITEMS_RESET`;

const INITIAL_STATE = {};

function doSelectItem(stateKey, id) {
  return {
    type: SELECT_ITEM,
    payload: {
      stateKey,
      id,
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
    type: SELECT_ITEMS_EXCLUSIVELY,
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
  let { stateKey, id } = action.payload;
  let list = state[stateKey] || [];
  let index = list.indexOf(id);
  let selectedItems;

  if (index !== -1) {
    selectedItems = removeItem(list, index);
  } else {
    selectedItems = addItem(list, id);
  }

  return { ...state, [stateKey]: selectedItems };
}

function applyToggleItems(state, action) {
  return toggleItems(state, action, false);
}

function applyToggleItemsExclusively(state, action) {
  return toggleItems(state, action, true);
}

function toggleItems(state, action, selectExclusively) {
  let { stateKey, isSelect, ids } = action.payload;
  let list = state[stateKey] || [];
  let selectedItems;

  if (isSelect) {
    selectedItems = uniq(selectExclusively ? ids : [...list, ...ids]);
  } else {
    selectedItems = removeItems(list, ids);
  }

  return { ...state, [stateKey]: selectedItems };
}

function applyResetSelectedItems(state, action) {
  const { stateKey } = action.payload;
  return { ...state, [stateKey]: [] };
}

function removeItems(list, ids) {
  return reduce(ids, (result, value) => {
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
  return state[SLICE_NAME][stateKey] || [];
}

function getIsSelected(state, stateKey, id) {
  return includes(getSelection(state, stateKey), id);
}

const selectors = {
  getSelection,
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
