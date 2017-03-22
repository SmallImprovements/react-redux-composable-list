import React, { Component, } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import generateList from './data';

import configureStore from './store';

import MyEverythingDataTable from './example';
import SomeFilter from './filter';

const store = configureStore();
const list = generateList(100);

const App = () =>
  <div>
    <SomeFilter
      stateKey={'FOO'}
    />
    <MyEverythingDataTable
      stateKey={'FOO'}
      list={list}
    />
  </div>

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
