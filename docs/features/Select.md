# Select Enhancement

The Select enhancement is an enabler to select items in your list.

* **General Requirements:**
  * pass a stateKey to Enhanced component
  * items need a stable id as identifier
* **Select Requirements:**
  * use withSelectables enhancement with configuration object
  * pass isSelectable to Enhanced component

## Definition

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

## Usage

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

## Configuration:

The configuration allows you to define selected items on initialization. In order to select the items with the `id: '1'` and `id: '2'`, you would use the configuration object `{ ids: ['1', '2'] }`.

## More Enhancements and Combinations

You can use two more enhancements to spice up your selectable list.

First, `withUnselectables` defines items in your list that are not selectable.

```javascript
import { compose } from recompose;

import { components, enhancements } from 'react-redux-composable-list';
const { Enhanced, Row, Cell } = components;
const { withSelectables, withUnselectables } = enhancements;

const Selectable = ({ list, stateKey, isSelectable, unselectables }) =>
  <Enhanced stateKey={stateKey} isSelectable={isSelectable} unselectables={unselectables}>
    {list.map(item =>
      <Row key={item.id}>
        <Cell style={{ width: '70%' }}>{item.title}</Cell>
        <Cell style={{ width: '30%' }}>{item.comment}</Cell>
      </Row>
    )}
  </Enhanced>

export default compose(
  withSelectables({ ids: [] }),
  withUnselectables({ ids: [] })
)(Selectable);
```

Second, `withPreselectables` defines items in your list that are selected yet cannot be unselected.

```javascript
import { compose } from recompose;

import { components, enhancements } from 'react-redux-composable-list';
const { Enhanced, Row, Cell } = components;
const { withSelectables, withPreselectables } = enhancements;

const Selectable = ({ list, stateKey, isSelectable, preselectables }) =>
  <Enhanced stateKey={stateKey} isSelectable={isSelectable} preselectables={preselectables}>
    {list.map(item =>
      <Row key={item.id}>
        <Cell style={{ width: '70%' }}>{item.title}</Cell>
        <Cell style={{ width: '30%' }}>{item.comment}</Cell>
      </Row>
    )}
  </Enhanced>

export default compose(
  withSelectables({ ids: [] }),
  withPreselectables({ ids: [] })
)(Selectable);
```

Both, `withUnselectables` and `withPreselectables`, can be used in a composition.

```javascript
import { compose } from recompose;

...

export default compose(
  withSelectables({ ids: [] }),
  withPreselectables({ ids: [] }),
  withUnselectables({ ids: [] })
)(Selectable);
```

You can have a look into the [Sort enhancement](/docs/features/Sort.md) to get to know how to sort selected items.

## Redux API

You can import action creators and selectors from the library:

```javascript
import { actionCreators, selectors } from 'react-redux-composable-list';
```

You can use Redux actions to update the Redux store. The library API offers the following action creators that can be dispatched:

* **actionCreators.doSelectItem(stateKey, id):**
  * selects an item in the list
* **actionCreators.doSelectItems(stateKey, ids, isSelect):**
  * selects or deselects multiple items in the list
* **actionCreators.doSelectItemsExclusively(stateKey, ids, isSelect):**
  * selects or deselects multiple items exclusively in the list, meaning that only these items get selected and all previous selected items get unselected
* **actionCreators.doSelectItemsReset(stateKey):**
  * resets all selected items

You can use Redux selectors to retrieve state from the Redux store. The library API offers the following selectors:

* **getSelection(state, stateKey):**
  * retrieves all selected items
* **getIsSelected(state, stateKey, id):**
  * checks if an item is selected

## Enhancer Components

The Row component, when using the `withSelectables` enhancement, becomes an [Enhancer Component](/docs/recipes/Consumer.md) that wraps the library API and alters the Select enhancement state.
