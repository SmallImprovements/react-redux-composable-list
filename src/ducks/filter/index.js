import { findIndex } from 'lodash';

import { applyResetByStateKeys, RESET_BY_STATE_KEYS } from '../reset';

const SLICE_NAME = 'tableFilter';

const FILTER_SET = `${SLICE_NAME}/FILTER_SET`;
const FILTER_REMOVE = `${SLICE_NAME}/FILTER_REMOVE`;
const FILTER_RESET = `${SLICE_NAME}/FILTER_RESET`;

const INITIAL_STATE = {};

function doSetQueryFilter(stateKey, string) {
  const key = 'user.name';
  if (!string) {
      return createAction(FILTER_REMOVE)({ stateKey, key });
  }

  return {
    type: FILTER_SET,
    payload: {
      stateKey,
      fn: (item) => item.name.match(new RegExp(string, 'i')),
      key,
    }
  };
}

function doResetFilter(stateKey) {
  return createAction(FILTER_RESET)({ stateKey });
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
  const oldFilterI = findIndex(container, (filter) => filter.key === key);
  if (oldFilterI !== -1) {
    container.splice(oldFilterI, 1);
  }
  container.push({ fn, key });
  return { ...state, [stateKey]: container.slice() };
}

function applyRemoveFilter(state, action) {
  const { stateKey, key } = action.payload;
  const container = getContainer(state, stateKey);
  const oldFilterI = findIndex(container, (filter) => filter.key === key);
  if (oldFilterI !== -1) {
    container.splice(oldFilterI, 1);
  }
  return { ...state, [stateKey]: container.slice() };
}

function applyResetFilter(state, action) {
  const { stateKey } = action.payload;
  return { ...state, [stateKey]: [] };
}

function getContainer(state, stateKey) {
  return state[stateKey] || [];
}

function getFilters(globalState, stateKey) {
  return globalState[SLICE_NAME][stateKey] || [];
}

const selectors = {
  getFilters
};

const actionCreators = {
  doSetQueryFilter,
  doResetFilter
};

const reducers = { [SLICE_NAME]: reducer };

export {
  reducers,
  selectors,
  actionCreators
};
