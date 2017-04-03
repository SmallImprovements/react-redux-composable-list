# Getting Started

You can use npm to install the library: `npm install react-redux-data-grid`

There are **two requirements** in order to use the library.

First, since it depends to store the state in the Redux store, you have to connect the library reducers to your Redux store.

```javascript
import { createStore, combineReducers } from 'redux';

import reducers from 'react-redux-data-grid';

const rootReducer = combineReducers({
  ...reducers,
  // add your own reducers
});

const configureStore = (initialState) => createStore(rootReducer, initialState);

export default configureStore;
```

Second, you need to use the [react-redux](https://github.com/reactjs/react-redux) Provider component, that takes the your Redux store as input, in a top level component. Maybe you already do so, because you have a React + Redux application. Afterwards you can use the functionalities of the library in your component tree.

```javascript
import configureStore from 'path/to/store';

const initialState = {};
const store = configureStore(initialState);

<Provider store={store}>
  <App />
</Provider>
```

Now you can start to write your first [plain](/docs/features/Plain.md) component.

```javascript
import { components } from 'react-redux-data-grid';
const { Enhanced, Row, Cell } = components;

const Plain = ({ list, stateKey }) =>
  <Enhanced stateKey={stateKey}>
    {list.map(item =>
      <Row key={item.id}>
        <Cell style={{ width: '70%' }}>{item.title}</Cell>
        <Cell style={{ width: '30%' }}>{item.comment}</Cell>
      </Row>
    )}
  </Enhanced>

export default Plain;
```

And use it in your application.

```javascript
import Plain from path/to/component';

const list = [
  { id: '1', title: 'foo', comment: 'foo foo' },
  { id: '2', title: 'bar', comment: 'bar bar' },
];

const App = () =>
  <Plain
    list={list}
    stateKey={'MY_PLAIN_LIST'}
  />
```

That's it. You show the list of data. But that's boring, because you want to use an Enhancement to manipulate your data. Otherwise the library doesn't bring you any benefit. Let's define an Enhanced Component that enables you to select items from the list.

```javascript
import { components, enhancements } from 'react-redux-data-grid';
const { Enhanced, Row, Cell } = components;
const { withSelectables } = enhancements;

const Selectable = ({ list, stateKey, isSelectable }) =>
  <Enhanced stateKey={stateKey} isSelectable={isSelectable}>
    {list.map(item =>
      <Row key={item.id}>
        <Cell style={{ width: '70%' }}>{item.title}</Cell>
        <Cell style={{ width: '30%' }}>{item.comment}</Cell>
      </Row>
    )}
  </Enhanced>

export default withSelectables({ ids: [] })(Selectable);
```

The object that is passed to the Enhancement is used to configure the Enhancement. In that case, the `ids` array is empty, but you could pass `['1']` to initially select the item with the `id: '1'`. Now you can use it again in your application.

```javascript
import Selectable from path/to/component';

const list = [
  { id: '1', title: 'foo', comment: 'foo foo' },
  { id: '2', title: 'bar', comment: 'bar bar' },
];

const App = () =>
  <Selectable
    list={list}
    stateKey={'MY_SELECTABLE_LIST'}
  />
```

That's it. Your items in the list should be selectable now. Refer to the [Select enhancement](/docs/features/Select.md) to get to know more about it. After all, you would need to retrieve the selected items at some point to do further things.

Before you dive into the set of features of the library, you should read the [Concepts](/docs/Concepts.md) behind it.
