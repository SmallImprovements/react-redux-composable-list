import sortBy from 'lodash.sortby';

import { partition } from '../../helper/util/partition';

import { applyResetByStateKeys, RESET_BY_STATE_KEYS } from '../reset';

const SLICE_NAME = 'tableSort';

const TABLE_SORT = `${SLICE_NAME}/TABLE_SORT`;

const INITIAL_STATE = {};

function doTableSort(stateKey, sortKey, sortFn, isReverse) {
  return {
    type: TABLE_SORT,
    payload: {
      stateKey,
      sortKey,
      sortFn,
      isReverse,
    }
  };
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TABLE_SORT:
      return applyTableSort(state, action);
    case RESET_BY_STATE_KEYS:
      return applyResetByStateKeys(state, action);
  }
  return state;
};

function applyTableSort(state, action) {
  const { stateKey, sortKey, sortFn, isReverse: explicitReverse } = action.payload;
  const isExplicitlyReverse = explicitReverse !== undefined;
  const implicitReverse = !!state[stateKey] && state[stateKey].sortKey === sortKey && !state[stateKey].isReverse;
  const isReverse = isExplicitlyReverse ? explicitReverse : implicitReverse;
  const enhancedSortFn = getEnhancedSortFn(isReverse, sortFn);
  return { ...state, [stateKey]: { sortFn: enhancedSortFn, sortKey, isReverse } };
}

function getEnhancedSortFn(isReverse, sortFn) {
  return function (items) {
    const [ filledValues, emptyValues ] = partition(items, (item) => isNotEmpty(sortFn(item)));

    return isReverse
      ? sortBy(filledValues, sortFn).reverse().concat(emptyValues)
      : sortBy(filledValues, sortFn).concat(emptyValues);
  };
}

function isNotEmpty(value) {
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
  actionTypes,

  // test only
  getEnhancedSortFn
};
