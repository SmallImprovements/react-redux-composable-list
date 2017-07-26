Small Improvements builds a product that makes feedback happen at companies. The software enables a company and its people to grow with feedback and objectives. It is a continuous loop between giving feedback and striving towards a goal. It allows you to grow as an individual in a company yet helps the company to focus on long term objectives.

Companies that are using Small Improvements range from 20 to 2000 users. When so many people set up short and long term objectives or write feedback about each other, a lot of data is available and needs to be displayed. In Small Improvements we are using lists and tables to make the data accessible. Our customers are keen to explore this data, that's why there needs to be an approach to make this data accessible by adding a rich set of features on top of just displaying data.

Back in the days, Small Improvements migrated from Angular to React. The migration came with the drawback that many of the components had to be re-written. Thus the way to show a lot of data in a table or list would be a requirement in React too.

In Angular, Small Improvements had a table component to show the data and to access it with filtering, sorting etc. However, it was a rigid implementation that nobody wanted to touch anymore. Basically, like you would have been used in Angular, it came with one monstrousness configuration object to show a table component.

In React, we wanted to make it better. According to the React way of doing things, we wanted to keep it composable, reusable and simple in its usage. We came up with a solution for ourselves, the [react-redux-composable-list](https://github.com/SmallImprovements/react-redux-composable-list), to make the data available with all desired functionalities. Since we were convinced that the solution would be beneficial for everyone, we wanted to open source it.

# Enhancements and Enhancers

The react-redux-composable-list offers you a solution to display a list of complex items. That sounds simple. Why would you need a library to deal with it?

The library comes with various opt-in features to manipulate the list of items or to change the representation of the list. These opt-in features are called **enhancements** or to stay in the React world: higher order components. Multiple enhancements can be composed to opt-in multiple features like **sorting, filtering or pagination**. After all, it gives you only an entry point to these enhancements. You can come up with enhancements on your own and just compose them into the set of enhancements that come with the library.

In addition, in order to manipulate the state of those enhancements, you can use (built-in) **enhancer** components. They can be used everywhere in your application and allow you to manipulate the sorting, filtering etc. state. There again the library stays extendable. You can write your own enhancer components.the library stays extendable. You can write your own enhancer components.

With the mental model behind this [idea](https://github.com/SmallImprovements/react-redux-composable-list/tree/master/docs/Idea.md) and [concepts](https://github.com/SmallImprovements/react-redux-composable-list/tree/master/docs/Concepts.md), you can come up with great opt-in features on your own. All features, coming from the library or from yourself, can be used to be composed into each other. The library comes with several features that you can already use, but it is not bound to a rigid endgame solution.

You can checkout the live demonstrations ([Showcases](https://react-redux-composable-list-showcases.wieruch.com/), [Real World](https://react-redux-composable-list-realworld.wieruch.com/)) that show several features of the library.

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

Now you can start to write your first [plain](https://github.com/SmallImprovements/react-redux-composable-list/tree/master/docs/features/Plain.md) component:

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

That's it. Your items in the list should be selectable now. Optionally you can have already selected items. Refer to the [Select enhancement](https://github.com/SmallImprovements/react-redux-composable-list/tree/master/docs/features/Select.md) to get to know more about it. After all, you would need to retrieve the selected items at some point to do further things.

Before you dive into the set of features of the library, you should read the [Concepts](https://github.com/SmallImprovements/react-redux-composable-list/tree/master/docs/Concepts.md) behind it.

# Extend It

As mentioned earlier, you can write your own enhancements and enhancers, because you have access to the library API. To be more specific, the library API is nothing but action creators and selectors for the Redux store. You will find everything you need to know about the API in each [documented enhancement](https://github.com/SmallImprovements/react-redux-composable-list/tree/master/docs/features). In general, the documentation is a good place to get started and to read up all the features.

We would love, if you would give it a show and give us feedback about it.
