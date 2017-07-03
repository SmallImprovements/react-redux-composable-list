# Filter Enhancement

The Filter enhancement is an enabler to filter items in your list.

* **General Requirements:**
  * pass a stateKey to Enhanced component
  * items need a stable id as identifier
* **Filter Requirements:**
  * use withFilter enhancement

## Definition

```javascript
import { components, enhancements } from 'react-redux-composable-list';
const { Enhanced, Row, Cell } = components;
const { withFilter } = enhancements;

const Filterable = ({ list, stateKey }) =>
  <Enhanced stateKey={stateKey}>
    {list.map(item =>
      <Row key={item.id}>
        <Cell style={{ width: '70%' }}>{item.title}</Cell>
        <Cell style={{ width: '30%' }}>{item.comment}</Cell>
      </Row>
    )}
  </Enhanced>

export default withFilter()(Filterable);
```

(Not Built-In) Enhancer Component:

```javascript
import { connect } from 'react-redux';
import { actionCreators } from 'react-redux-composable-list';

const Filters = ({ onTitleFilterChange, onCommentFilterChange }) =>
  <div>
    <h3>Filters</h3>
    <div>
      Title: <input
        type="text"
        onChange={e => onTitleFilterChange(e.target.value)}
      />
    </div>
    <div>
      Comment: <input
        type="text"
        onChange={e => onCommentFilterChange(e.target.value)}
      />
    </div>
  </div>

const titleFilterFn = query => item =>
  item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;

const commentFilterFn = query => item =>
  item.comment.toLowerCase().indexOf(query.toLowerCase()) !== -1;

const mapDispatchToProps = (dispatch, props) => ({
  onTitleFilterChange: (query) => query !== ''
    ? dispatch(actionCreators.doSetFilter(props.stateKey, 'TITLE_FILTER', titleFilterFn(query)))
    : dispatch(actionCreators.doRemoveFilter(props.stateKey, 'TITLE_FILTER')),

  onCommentFilterChange: (query) => query !== ''
    ? dispatch(actionCreators.doSetFilter(props.stateKey, 'COMMENT_FILTER', commentFilterFn(query)))
    : dispatch(actionCreators.doRemoveFilter(props.stateKey, 'COMMENT_FILTER'))
});

export default connect(null, mapDispatchToProps)(Filters);
```

## Usage

```javascript
import Filters from path/to/component';
import Filterable from path/to/component';

const list = [
  { id: '1', title: 'foo', comment: 'foo foo' },
  { id: '2', title: 'bar', comment: 'bar bar' },
];

const App = () =>
  <div>
    <Filters
      stateKey={'MY_FILTERABLE_LIST'}
    />
    <Filterable
      list={list}
      stateKey={'MY_FILTERABLE_LIST'}
    />
  </div>
```

## More Enhancements

When using the `withFilter` enhancement, all set filters are AND concatenated. There are cases, where you want to concatenate them OR. In order to do so, you only have to exchange the enhancement yet you can keep the Filter Enhancer Components.

```javascript
import { components, enhancements } from 'react-redux-composable-list';
const { Enhanced, Row, Cell } = components;
const { withFilterOr } = enhancements;

const Filterable = ({ list, stateKey }) =>
  <Enhanced stateKey={stateKey}>
    {list.map(item =>
      <Row key={item.id}>
        <Cell style={{ width: '70%' }}>{item.title}</Cell>
        <Cell style={{ width: '30%' }}>{item.comment}</Cell>
      </Row>
    )}
  </Enhanced>

export default withFilterOr()(Filterable);
```

## Redux API

You can import action creators and selectors from the library:

```javascript
import { actionCreators, selectors } from 'react-redux-composable-list';
```

You can use Redux actions to update the Redux store. The library API offers the following action creators that can be dispatched:

* **actionCreators.function doSetFilter(stateKey, key, fn):**
  * sets a filter function identified by a key
* **actionCreators.function doRemoveFilter(stateKey, key):**
  * removes a filter identified by a key
* **actionCreators.function doResetFilter(stateKey):**
  * removes all filters

You can use Redux selectors to retrieve state from the Redux store. The library API offers the following selectors:

* **getFilters(state, stateKey):**
  * retrieves all filter functions

## Enhancer Components

There are no built-in enhancer components in the library. We believed that Filter components look and behave always different. You can use the library API, like in the example above, to build your own filter enhancer component.
