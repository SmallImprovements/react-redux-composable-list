# Infinite

The Infinite feature is no real enhancement. Since the library works with composition, you can use third-party components too. The following scenario shows you how you can use `react-infinite` ([docs](TODO link)) to achieve infinite scroll. It is used as alternative to the [Pagination enhancement](/docs/features/Pagination.md).

* **General Requirements:**
  * pass a stateKey to Enhanced component
  * items need a stable id as identifier

## Definition

```javascript
import Infinite from 'react-infinite';

import { components } from 'react-redux-data-grid';
const { Enhanced, Row, Cell } = components;

const Infinity = ({ list, stateKey }) =>
  <Enhanced stateKey={stateKey}>
    <Infinite containerHeight={300} elementHeight={36}>
    {list.map(item =>
      <Row key={item.id}>
        <Cell style={{ width: '70%' }}>{item.title}</Cell>
        <Cell style={{ width: '30%' }}>{item.comment}</Cell>
      </Row>
    )}
    </Infinite>
  </Enhanced>

export default Infinity;
```

## Usage

```javascript
import Infinity from path/to/component';

const list = [
  { id: '1', title: 'foo', comment: 'foo foo' },
  { id: '2', title: 'bar', comment: 'bar bar' },
];

const App = () =>
  <Infinity
    list={list}
    stateKey={'MY_INFINITY_LIST'}
  />
```
