import { map, omit } from 'lodash';

import { applyResetByStateKeys, RESET_BY_STATE_KEYS } from '../reset';

const SLICE_NAME = 'tableFilter';

const FILTER_SET = `${SLICE_NAME}/FILTER_SET`;
const FILTER_REMOVE = `${SLICE_NAME}/FILTER_REMOVE`;
const FILTER_RESET = `${SLICE_NAME}/FILTER_RESET`;

const INITIAL_STATE = {};

function doSetFilter(stateKey, key, fn) {
  return {
    type: FILTER_SET,
    payload: {
      stateKey,
      fn,
      key,
    }
  };
}

function doRemoveFilter(stateKey, key) {
  return {
    type: FILTER_REMOVE,
    payload: {
      stateKey,
      key,
    }
  };
}

function doResetFilter(stateKey) {
  return {
    type: FILTER_RESET,
    payload: {
      stateKey,
    }
  };
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_SET:
      return applySetFilter(state, action);
    case FILTER_REMOVE:
      return applyRemoveFilter(state, action);
    case FILTER_RESET:
      return applyResetFilter(state, action);
    case RESET_BY_STATE_KEYS:
      return applyResetByStateKeys(state, action);
  }
  return state;
};

function applySetFilter(state, action) {
  const { stateKey, fn, key } = action.payload;
  const container = getContainer(state, stateKey);
  return {
    ...state,
    [stateKey]: {
      ...container,
      [key]: fn,
    }
  };
}

function applyRemoveFilter(state, action) {
  const { stateKey, key } = action.payload;
  const container = getContainer(state, stateKey);
  return {
    ...state,
    [stateKey]: {
      ...omit(container, key),
    }
  };
}

function applyResetFilter(state, action) {
  const { stateKey } = action.payload;
  return { ...state, [stateKey]: [] };
}

function getContainer(state, stateKey) {
  return state[stateKey] || [];
}

function getFilters(state, stateKey) {
  return map(state[SLICE_NAME][stateKey] || {}, filter => filter);
}

const selectors = {
  getFilters
};

const actionCreators = {
  doSetFilter,
  doRemoveFilter,
  doResetFilter
};

const reducers = { [SLICE_NAME]: reducer };

export {
  reducers,
  selectors,
  actionCreators
};
