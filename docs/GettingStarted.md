# Getting Started

You can use npm to install the library: `npm install react-redux-composable-list`

There are **two requirements** in order to use the library:

First, since it depends to save the state in the Redux store, you have to connect the reducers provided by the library to your Redux store.

```javascript
import { createStore, combineReducers } from 'redux';

import reducers from 'react-redux-composable-list';

const rootReducer = combineReducers({
  ...reducers,
  // add your own reducers
});

const configureStore = (initialState) => createStore(rootReducer, initialState);

export default configureStore;
```

Second, you need to use the [react-redux](https://github.com/reactjs/react-redux) Provider component, that takes your Redux store as input, in a top level component. Maybe you already do so, because you have a React + Redux application. Afterward, you can use the functionalities of the library in your component tree.

```javascript
import configureStore from 'path/to/store';

const initialState = {};
const store = configureStore(initialState);

<Provider store={store}>
  <App />
</Provider>
```

Now you can start to write your first [plain](/docs/features/Plain.md) component:

```javascript
import { components } from 'react-redux-composable-list';
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

And use it in your application:

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

That's it. You show the list of data. But that's dull, isn't it? You might want to use the functionalities of the library. There should be an enhancement ([higher order component](https://www.robinwieruch.de/gentle-introduction-higher-order-components/)) in between, otherwise the library doesn't bring you any benefits.

Let's define an Enhanced Component that enables you to select items from the list:

```javascript
import { components, enhancements } from 'react-redux-composable-list';
const { Enhanced, Row, Cell } = components;
const { withSelectables } = enhancements;

const Selectable = ({ list, stateKey }) =>
  <Enhanced stateKey={stateKey}>
    {list.map(item =>
      <Row key={item.id}>
        <Cell style={{ width: '70%' }}>{item.title}</Cell>
        <Cell style={{ width: '30%' }}>{item.comment}</Cell>
      </Row>
    )}
  </Enhanced>

export default withSelectables()(Selectable);
```

That should already do the magic to make your items in the list selectable. You can use it again in your application:

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

The enhancement can be configured by passing an configuration object.  You could pass `['1']` to initially select the item with the `id: '1'`:

```javascript
...

export default withSelectables({ ids: ['1'] })(Selectable);
```

That's it. Your items in the list should be selectable now. Optionally you can have already selected items. Refer to the [Select enhancement](/docs/features/Select.md) to get to know more about it. After all, you would need to retrieve the selected items at some point to do further things.

Before you dive into the set of features of the library, you should read the [Concepts](/docs/Concepts.md) behind it.
