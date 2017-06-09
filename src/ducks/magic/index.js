import { applyResetByStateKeys, RESET_BY_STATE_KEYS } from '../reset';

const SLICE_NAME = 'tableMagicSort';

const TABLE_SET_MAGIC = `${SLICE_NAME}/TABLE_SET_MAGIC`;

const INITIAL_STATE = {};

function doSetMagicSort(stateKey, sortKey) {
  return {
    type: TABLE_SET_MAGIC,
    payload: {
      stateKey,
      sortKey
    }
  }
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TABLE_SET_MAGIC:
      return applySetMagic(state, action);
    case RESET_BY_STATE_KEYS:
      return applyResetByStateKeys(state, action);
  }
  return state;
};

function applySetMagic(state, action) {
  const { stateKey, sortKey } = action.payload;
  return { ...state, [stateKey]: sortKey };
}

function getMagicSort(state, stateKey, sorts) {
  return state[SLICE_NAME][stateKey] || sorts[0].sortKey;
}

const selectors = {
  getMagicSort,
};

const actionCreators = {
  doSetMagicSort,
};

const reducers = { [SLICE_NAME]: reducer };

const actionTypes = {
  TABLE_SET_MAGIC,
};

export {
  reducers,
  selectors,
  actionCreators,
  actionTypes
};
