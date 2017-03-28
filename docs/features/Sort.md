# Sort Enhancement

The Sort enhancement is an enabler to sort items in your list.

* **General Requirements:**
  * pass a stateKey to Enhanced component
  * items need a stable id as identifier
* **Sort Requirements:**
  * use withSort enhancement

**Definition:**

```javascript
import { components, enhancements } from 'react-redux-data-grid';
const { Enhanced, Row, Cell, HeaderCell, Sort } = components;
const { withSelectables } = enhancements;

const titleSort = item => item.title;
const commentSort = item => item.comment;

const Sortable = ({ list, stateKey }) =>
  <Enhanced stateKey={stateKey}>
    <Row>
      <HeaderCell style={WIDTHS.MEDIUM}>
        <Sort
          sortKey={'title'}
          sortFn={titleSort}>
          Title
        </Sort>
      </HeaderCell>
      <HeaderCell style={WIDTHS.MEDIUM}>
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

**Usage:**

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

**Configuration:**

The configuration allows you to define already selected items on initialization. In order to select the items with the `id: '1'` and `id: '2'`, you would use the configuration object `{ ids: ['1', '2'] }`.

**In Combination:**

In case you activated the [Select enhancement](/docs/features/Select.md), you can sort the select status of the items in the list with the Sort enhancement.

- show sort of select