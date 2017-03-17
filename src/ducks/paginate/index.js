import { applyResetByStateKeys, RESET_BY_STATE_KEYS } from '../reset';

const SLICE_NAME = 'tablePaginate';

const PAGINATION_SET = `${SLICE_NAME}/PAGINATION_SET`;

const INITIAL_STATE = {};

function doSetPage(stateKey, page) {
  return {
    type: PAGINATION_SET,
    payload: {
      stateKey,
      page
    }
  };
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PAGINATION_SET:
      return applyPage(state, action);
    case RESET_BY_STATE_KEYS:
      return applyResetByStateKeys(state, action);
  }
  return state;
};

function applyPage(state, action) {
  const { stateKey, page } = action.payload;
  return { ...state, [stateKey]: page };
}

function getCurrentPage(globalState, stateKey, paginatedLists) {
  const currentPage = globalState[SLICE_NAME][stateKey];
  return currentPage ? fallbackDefault(currentPage, paginatedLists) : 0;
}

function fallbackDefault(currentPage, paginatedLists) {
  return currentPage < paginatedLists.length ? currentPage : paginatedLists.length - 1;
}

const selectors = {
  getCurrentPage
};

const actionCreators = {
  doSetPage
};

const reducers = { [SLICE_NAME]: reducer };

const actionTypes = {
  PAGINATION_SET
};

export {
  reducers,
  actionCreators,
  actionTypes,
  selectors
};
