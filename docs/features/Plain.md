# Plain

Without any enhancement, you can still use several components in your pseudo enhanced component from the library to render a list of data. The `Enhanced` component always takes a `stateKey as identifier`. The Row and Cell components layout the items of the list in a Table.

**Definition:**

```javascript
import { components } from 'react-redux-data-grid';
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

**Usage:**

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
