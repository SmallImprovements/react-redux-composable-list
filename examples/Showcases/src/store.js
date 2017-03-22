import { applyMiddleware, createStore, combineReducers } from 'redux';
import createLogger from 'redux-logger';

import reducers from 'react-redux-data-grid';

const logger = createLogger();

const rootReducer = combineReducers({
  ...reducers,
  // add your own app reducers
});

const configureStore = (initialState) => createStore(rootReducer, applyMiddleware(logger), initialState);

export default configureStore;
