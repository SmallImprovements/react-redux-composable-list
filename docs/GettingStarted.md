# Getting Started

You can use npm to install the library.

`npm install react-redux-data-grid`

There are **two requirements** in order to use the library.

First, you have to connect the its reducers to your Redux store.

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

Second you need to use the [react-redux](https://github.com/reactjs/react-redux) Provider component, that takes the your Redux store as input, in a top level component. Maybe you already do so, because you have a React + Redux application. Afterwards you can use the functionalities of the library below in your component tree.

```javascript
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

That's it. You show the list of data. But that's boring, because you want to use an enhancement to manipulate your data. Let's define a enhanced component that enables you to select items from the list.

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

The object that is passed to the enhancement is used to configure the enhancement. In that case, the `ids` array is empty, but you could pass `['1']` to initially select the item with the `id: '1'`. Now you can use it again in your application.

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

That's it. Your items in the list should be selectable. Refer to the [Select enhancement](/docs/features/Select.md) to get to know more about it.

Before you dive into set of features of the library, you should read the [Concepts](/docs/Concepts.md) of the library first.
