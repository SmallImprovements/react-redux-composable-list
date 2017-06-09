# Sort Enhancement

The Sort enhancement is an enabler to sort items in your list.

* **General Requirements:**
  * pass a stateKey to Enhanced component
  * items need a stable id as identifier
* **Sort Requirements:**
  * use withSort enhancement

## Definition

```javascript
import { components, enhancements } from 'react-redux-composeable-list';
const { Enhanced, Row, Cell, HeaderCell, Sort } = components;
const { withSort } = enhancements;

const titleSort = item => item.title;
const commentSort = item => item.comment;

const Sortable = ({ list, stateKey }) =>
  <Enhanced stateKey={stateKey}>
    <Row>
      <HeaderCell style={{ width: '70%' }}>
        <Sort
          sortKey={'title'}
          sortFn={titleSort}>
          Title
        </Sort>
      </HeaderCell>
      <HeaderCell style={{ width: '30%' }}>
        <Sort
          sortKey={'comment'}
          sortFn={commentSort}>
          Comment
        </Sort>
      </HeaderCell>
    </Row>
    {list.map(item =>
      <Row key={item.id}>
        <Cell style={{ width: '70%' }}>{item.title}</Cell>
        <Cell style={{ width: '30%' }}>{item.comment}</Cell>
      </Row>
    )}
  </Enhanced>

export default withSort()(Sortable);
```

## Usage

```javascript
import Sortable from path/to/component';

const list = [
  { id: '1', title: 'foo', comment: 'foo foo' },
  { id: '2', title: 'bar', comment: 'bar bar' },
];

const App = () =>
  <Sortable
    list={list}
    stateKey={'MY_SORTABLE_LIST'}
  />
```

## More Combinations

You can use the `suffix` property to add components that reflect the ascending and descending sort.

```javascript
import { components, enhancements } from 'react-redux-composeable-list';
const { Enhanced, Row, Cell, HeaderCell, Sort } = components;
const { withSort } = enhancements;

const titleSort = item => item.title;
const commentSort = item => item.comment;

const SORTS_ASC_DESC = {
  ASC: <span>(asc)</span>,
  DESC: <span>(desc)</span>,
};

// or
// const SORTS_ASC_DESC = {
//  ASC: <i className="some-icon-down" />,
//  DESC: <i className="some-icon-up" />,
// };

const Sortable = ({ list, stateKey }) =>
  <Enhanced stateKey={stateKey}>
    <Row>
      <HeaderCell style={{ width: '70%' }}>
        <Sort
          sortKey={'title'}
          sortFn={titleSort}
          suffix={SORTS_ASC_DESC}>
          Title
        </Sort>
      </HeaderCell>
      <HeaderCell style={{ width: '30%' }}>
        <Sort
          sortKey={'comment'}
          sortFn={commentSort}
          suffix={SORTS_ASC_DESC}>
          Comment
        </Sort>
      </HeaderCell>
    </Row>
    {list.map(item =>
      <Row key={item.id}>
        <Cell style={{ width: '70%' }}>{item.title}</Cell>
        <Cell style={{ width: '30%' }}>{item.comment}</Cell>
      </Row>
    )}
  </Enhanced>

export default withSort()(Sortable);
```

In case you use the [Select enhancement](/docs/features/Select.md), you can sort the select status of the items too. There exist two built-in components to accomplish it: `SortSelected` and `CellSelected`.

```javascript
import { components, enhancements } from 'react-redux-composeable-list';
const { Enhanced, Row, Cell, HeaderCell, Sort, SortSelected, CellSelected } = components;
const { withSort } = enhancements;

const titleSort = item => item.title;
const commentSort = item => item.comment;

const SORTS_ASC_DESC = {
  ASC: <span>(asc)</span>,
  DESC: <span>(desc)</span>,
};

const Sortable = ({ list, stateKey }) =>
  <Enhanced stateKey={stateKey}>
    <Row>
      <HeaderCell style={{ width: '60%' }}>
        <Sort
          sortKey={'title'}
          sortFn={titleSort}
          suffix={SORTS_ASC_DESC}>
          Title
        </Sort>
      </HeaderCell>
      <HeaderCell style={{ width: '30%' }}>
        <Sort
          sortKey={'comment'}
          sortFn={commentSort}
          suffix={SORTS_ASC_DESC}>
          Comment
        </Sort>
      </HeaderCell>
      <HeaderCell style={{ width: '10%' }}>
        <SortSelected
          sortKey={'selected'}
          suffix={SORTS_ASC_DESC}>
          Selected
        </SortSelected>
      </HeaderCell>
    </Row>
    {list.map(item =>
      <Row key={item.id}>
        <Cell style={{ width: '60%' }}>{item.title}</Cell>
        <Cell style={{ width: '30%' }}>{item.comment}</Cell>
        <Cell style={{ width: '10%' }}>
          <CellSelected id={item.id}>
            {{
              SELECTED: <span>SELECTED</span>,
              NOT_SELECTED: <span>NOT_SELECTED</span>,
              PRE_SELECTED: <span>PRE_SELECTED</span>,
              UNSELECTABLE: <span>UNSELECTABLE</span>,
            }}
          </CellSelected>
        </Cell>
      </Row>
    )}
  </Enhanced>

export default withSort()(Sortable);
```

## Redux API

You can import action creators and selectors from the library:

```javascript
import { actionCreators, selectors } from 'react-redux-composeable-list';
```

You can use Redux actions to update the Redux store. The library API offers the following action creators that can be dispatched:

* **actionCreators.doTableSort(stateKey, sortKey, sortFn):**
  * sorts items in the list by key and sort function, e.g. `item => item.title`

You can use Redux selectors to retrieve state from the Redux store. The library API offers the following selectors:

* **getSort(state, stateKey):**
  * retrieves the activated sort object with key and sort function

## Enhancer Components

The Sort component, when using the `withSort` enhancement, is an [Enhancer Component](/docs/recipes/Consumer.md) that wraps the library API and alters the Sort enhancement state.
