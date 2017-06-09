# Empty Enhancement

The Empty enhancement allows you to opt-in conditional rendered components when the list is empty. It can happen because the list is initially empty or after another enhancement (Filter Enhancement) affected the list. It improves the user experience.

* **General Requirements:**
  * pass a stateKey to Enhanced component
  * items need a stable id as identifier
* **Empty Requirements:**
  * use withEmpty enhancement with configuration object

## Definition

```javascript
import { components, enhancements } from 'react-redux-composeable-list';
const { Enhanced, Row, Cell } = components;
const { withEmpty } = enhancements;

const CanBeEmpty = ({ list, stateKey }) =>
  <Enhanced stateKey={stateKey}>
    {list.map(item =>
      <Row key={item.id}>
        <Cell style={{ width: '70%' }}>{item.title}</Cell>
        <Cell style={{ width: '30%' }}>{item.comment}</Cell>
      </Row>
    )}
  </Enhanced>

const EmptyBecauseNoList = () =>
  <div>
    <h3>Nothing to see!</h3>
    <p>Sorry, there is no content.</p>
  </div>

export default withEmpty({ component: EmptyBecauseNoList })(CanBeEmpty);
```

## Usage

```javascript
import CanBeEmpty from path/to/component';

const list = [];

const App = () =>
  <CanBeEmpty
    list={list}
    stateKey={'MY_CAN_BE_EMPTY_LIST'}
  />
```

## Configuration:

The configuration takes a component that will be conditional rendered in case the list is empty.

## More Combinations

You can use multiple `withEmpty` enhancements to achieve an improved user experience. For instance, you can use an initial `withEmpty` enhancement to show a message when there is no list at all, but show another `withEmpty` when the list is empty due to a set filter.


```javascript
import { compose } from recompose;

...

const EmptyBecauseFilter = () =>
  <div>
    <h3>No Filter Result</h3>
    <p>Sorry, there was no item matching your filter.</p>
  </div>

const EmptyBecauseNoList = () =>
  <div>
    <h3>Nothing to see!</h3>
    <p>Sorry, there is no content.</p>
  </div>

export default compose(
  withEmpty({ component: EmptyBecauseNoList }),
  withFilter(),
  withEmpty({ component: EmptyBecauseFilter }),
)(TodoList);
```

You can have a look into the [Filter enhancement](/docs/features/Filter.md) to get to know how to filter items between your `withEmpty` enhancements.
