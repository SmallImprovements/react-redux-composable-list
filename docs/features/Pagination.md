# Pagination Enhancement

The Pagination enhancement allows you to show a large list of data split up to pages.

* **General Requirements:**
  * pass a stateKey to Enhanced component
  * items need a stable id as identifier
* **Pagination Requirements:**
  * use withPaginate enhancement with configuration object

## Demo

* [Showcases](https://react-redux-composable-list-showcases.wieruch.com/)
  * With Pagination
* [Real World](https://react-redux-composable-list-realworld.wieruch.com/)

## Definition

```javascript
import { components, enhancements } from 'react-redux-composable-list';
const { Enhanced, Row, Cell } = components;
const { withPaginate } = enhancements;

const Paginated = ({ list, stateKey }) =>
  <Enhanced stateKey={stateKey}>
    {list.map(item =>
      <Row key={item.id}>
        <Cell style={{ width: '70%' }}>{item.title}</Cell>
        <Cell style={{ width: '30%' }}>{item.comment}</Cell>
      </Row>
    )}
  </Enhanced>

export default withPaginate({ size: 10 })(Paginated);
```

## Usage

```javascript
import Paginated from 'path/to/component';

const list = [
  { id: '1', title: 'foo', comment: 'foo foo' },
  { id: '2', title: 'bar', comment: 'bar bar' },
];

const App = () =>
  <Paginated
    list={list}
    stateKey={'MY_PAGINATED_LIST'}
  />
```

## Configuration

The configuration allows you to define a size for your pages. You want to show 10 items per page? You can define it by using the configuration object `{ size: 10 }`.

## More Combinations

You can combine the Pagination enhancement with other enhancements. For instance, it can be combined with the [Sort enhancement](/docs/features/Sort.md) and [Filter enhancement](/docs/features/Filter.md). But you should be aware, that when applying the enhancements the order matters. You should first apply all the list manipulation enhancements (Sort, Filter) and afterwards paginate the list.

## Redux API

You can import action creators and selectors from the library:

```javascript
import { actionCreators } from 'react-redux-composable-list';
```

You can use Redux actions to update the Redux store. The library API offers the following action creators that can be dispatched:

* **actionCreators.doSetPage(stateKey, page):**
  * your pagination should have multiple pages, the method allows you to set one of these pages

## Enhancer Components

The enhanced component, when using the `withPaginate` enhancement, gets extended by pagination controls to alter the Pagination enhancements by using the library API.
