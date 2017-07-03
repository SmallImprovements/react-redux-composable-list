Small Improvements builds a product that makes feedback happen at companies. The software enables a company and its people to grow with feedback and objectives. It is a continuous loop between giving feedback and contributing to a goal. It allows you to grow as an individual in a company yet helps the company to focus on long term objectives.

Customers of Small Improvements range from 20 to 2000 users. When so many people set up short and long term objectives or write feedback about each other, a lot of data is available. The human resource department and managers are keen to explore this data. As developers, it is our duty to make all of this data accessible.

Back in the days Small Improvements migrated from Angular to React. The migration came with the drawback that many of the components had to be rewritten. Thus the way to show a lot of data would be a requirement in React too.

In Angular, Small Improvements had a component to show the data and to access it with filtering and sorting. However, it was a rigid implementation that nobody wanted to touch anymore. Basically, like you would have been used in Angular, it came with one monstrousness configuration object to show a table component.

In React, as everyone would want to, we wanted to make it better. According to the React way we wanted to keep it composeable, reusable and simple in its usage. We came up with a solution for ourselves, the [react-redux-composable-list](https://github.com/SmallImprovements/react-redux-composable-list), to make the data available with all desired functionalities. Since we were convinced that the solution would be beneficial for everyone, we wanted to open source it.

# Entering Enhancements and Enhancers

The react-redux-composable-list offers you a solution to show a list of items. That sounds simple. Why would you need a library to deal with it? The library comes with various opt-in features to manipulate the list of items or to change the representation of the list. These opt-in features are called enhancements or to stay in the React world: higher order components. Multiple enhancements can be composed to opt-in multiple features like sorting, filtering or pagination. After all, it gives you only an entry point to these enhancements. You can come up with enhancements on your own, since these enhancements are reusable and composeable and the library API is well documented.

In addition, in order to manipulate the state of those enhancements, you can use built-in enhancer components. They can be used everywhere in your application and allow you to manipulate sorting, filtering etc. There again the library stays extendable. You can write your own enhancer components.

With the mental model behind this [idea](https://github.com/SmallImprovements/react-redux-composable-list/blob/master/docs/Idea.md) and [concepts](https://github.com/SmallImprovements/react-redux-composable-list/blob/master/docs/Concepts.md), you can come up with great features on your own. All features can be used to be composed into each other. The library comes with several features that you can already use, but it is not bound to a rigid endgame solution.

You can checkout the quick live [Demo](TODO link) that demonstrates several features of the library.

# Getting Started

To give you a quick example, the article shows you how you would implement a sortable list.

You can use npm to install the library: `npm install react-redux-composable-list`

In the beginning, there are **two requirements** in order to use the library.

First, since it depends to store the state in the Redux store, you have to connect the library reducers to your Redux store.

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

Second, you need to use the [react-redux](https://github.com/reactjs/react-redux) Provider component, that takes the your Redux store as input, in a top level component. Maybe you already do so, because you have a React + Redux application. Afterwards you can use the functionalities of the library in your component tree.

```javascript
import configureStore from 'path/to/store';

const initialState = {};
const store = configureStore(initialState);

<Provider store={store}>
  <App />
</Provider>
```

Now you can start to write your first [plain](https://github.com/SmallImprovements/react-redux-composable-list/blob/master/docs/features/Plain.md) component.

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

That's it. You show the list of items. But that's boring, because you want to use an Enhancement to manipulate your data. Otherwise the library doesn't bring you any benefit. Let's define an Enhanced Component that enables you to select items from the list.

```javascript
import { components, enhancements } from 'react-redux-composable-list';
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
import SelectableList from path/to/component';

const list = [
  { id: '1', title: 'foo', comment: 'foo foo' },
  { id: '2', title: 'bar', comment: 'bar bar' },
];

const App = () =>
  <SelectableList
    list={list}
    stateKey={'MY_ENHANCED_LIST'}
  />
```

That's it. Your items in the list should be selectable now. Refer to the [Select enhancement](https://github.com/SmallImprovements/react-redux-composable-list/blob/master/docs/features/Select.md) to get to know more about it. After all, you would need to retrieve the selected items at some point to do further things.

# Extend It

As mentioned earlier, you can write your own enhancements and enhancers, because you have access to the library API. To be more specific, the library API is nothing but action creators and selectors for the Redux store. You will find everything you need to know about the API in each [documented enhancement](https://github.com/SmallImprovements/react-redux-composable-list/tree/master/docs/features). In general, the documentation is a good place to get started and to read up all the features.

We would love, if you would give it a show and give us feedback about it.
