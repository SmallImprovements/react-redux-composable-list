# Composition

The library builds up on the [Idea](/docs/Idea.md) of composition. The idea applies for components in the enhanced component but also for the enhancements themselves. If you didn't read the [Concepts](/docs/Concepts.md) of the library, you should do so before you continue to read.

## Components

The library gives you a handful of basic components to layout your list of items.

```javascript
import { components } from 'react-redux-data-grid';
const { Enhanced, Row, Cell, HeaderCell } = components;
```

You can use them to layout your list of data.

```javascript
import { components } from 'react-redux-data-grid';
const { Enhanced, Row, Cell } = components;

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

In addition, there are [Enhancer Components](/docs/recipes/Consumer.md) that consume the library API to alter the enhancements. These enhancers can be inside the enhanced component, like the `Sort` Enhancer Component in the [Sort Enhancement](/docs/features/Sort.md) example, or anywhere outside of your enhanced component, like the custom build `Filter` Enhancer Component in the [Filter Enhancement](/docs/features/Filter.md) example.

After all, you can use all these built-in layout and enhancer components to compose your enhanced component. In addition, you can come up with custom layout and enhancer components.

## Higher Order Components

The higher order components, called enhancements in the library, can be used to create enhanced components. Multiple enhancements can be composed to opt-in multiple features. You can have a look into each [Enhancement](/docs/features/README.md) to get to know the different enhancements.

In order to compose multiple of these enhancements into one enhanced component, you can use a helper library like [recompose](https://github.com/acdlite/recompose) with its compose functionality.

```javascript
import { compose } from recompose;

import { enhancements } from 'react-redux-data-grid';
const { withSelectables, withUnselectables } = enhancements;

...

export default compose(
  withSelectables({ ids: [] }),
  withUnselectables({ ids: [] })
)(TodoList);
```

### Multiple Enhancements

In case you are using multiple enhancements, you can compose them in a appropriate order to **improve the performance** and to **avoid bugs**.

For instance, the former makes sense when the enhancements `withFilter` and `withSort` are used. You should apply the `withFilter` before the `withSort` enhancement. It makes more sense to filter the list first in order to sort them with less items afterwards.

Regarding the bugs, a few enhancements need to have the correct order. For instance, the `withPaginate` enhancement needs to be after the `withFilter` and `withSort` enhancements, because the pagination needs to be applied on the shown list.

```javascript
export default compose(
  withFilter(),
  withSort(),
  withPaginate({ size: 10 }),
)(TodoList);
```