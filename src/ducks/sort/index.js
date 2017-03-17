import { sortBy, partition } from 'lodash';

import { applyResetByStateKeys, RESET_BY_STATE_KEYS } from '../reset';

const SLICE_NAME = 'tableSort';

const TABLE_SORT = `${SLICE_NAME}/TABLE_SORT`;

const INITIAL_STATE = {};

function doTableSort(stateKey, sortKey, sortFn) {
  return {
    type: TABLE_SORT,
    payload: {
      stateKey,
      sortKey,
      sortFn,
    }
  };
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TABLE_SORT:
      return applyResetByStateKeys(state, action);
    case RESET_BY_STATE_KEYS:
      return applyResetByStateKeys(state, action);
  }
  return state;
};

function applyTableSort(state, action) {
  const { stateKey, sortKey, sortFn } = action.payload;

  const isReverse = !!state[stateKey] && state[stateKey].sortKey === sortKey && !state[stateKey].isReverse;
  const enhancedSortFn = getEnhancedSortFn(isReverse, sortFn);

  return { ...state, [stateKey]: { sortFn: enhancedSortFn, sortKey, isReverse } };
}

function getEnhancedSortFn(isReverse, sortFn) {
  return function (items) {
    const [ filledValues, emptyValues ] = partition(items, (item) => isEmpty(sortFn(item)));
    return isReverse
      ? sortBy(filledValues, sortFn).reverse().concat(emptyValues)
      : sortBy(filledValues, sortFn).concat(emptyValues);
  };
}

function isEmpty(value) {
  return value !== undefined && value !== null && value !== '';
}

function getSort(state, stateKey) {
  return state[SLICE_NAME][stateKey] || {};
}

const selectors = {
  getSort
};

const actionCreators = {
  doTableSort
};

const reducers = { [SLICE_NAME]: reducer };

const actionTypes = {
  TABLE_SORT,
};

export {
  reducers,
  selectors,
  actionCreators,
  actionTypes
};
