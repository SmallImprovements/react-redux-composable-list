# Plain

Without any enhancement, you can still use layout components in your pseudo enhanced component from the library to render a list of data. The `Enhanced` component always takes a `stateKey` as identifier. The Row, Cell and HeaderCell components layout the items of the list in a Table.

**Demo: **

* [Plain](https://react-redux-composable-list-showcases.wieruch.com/)

**Definition:**

```javascript
import { components } from 'react-redux-composable-list';
const { Enhanced, Row, Cell, HeaderCell } = components;

const Plain = ({ list, stateKey }) =>
  <Enhanced stateKey={stateKey}>
    <Row>
      <HeaderCell style={{ width: '70%' }}>Title</HeaderCell>
      <HeaderCell style={{ width: '30%' }}>Comment</HeaderCell>
    </Row>
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
