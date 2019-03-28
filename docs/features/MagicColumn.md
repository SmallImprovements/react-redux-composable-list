# Magic Column Enhancement

The Magic Column enhancement gives you a flexbile column in your table. The column can show multiple values. It is especially useful when your item has a lot of properties that you want to show. Before you apply this enhancement, you should be familiar with the [Sort enhancement](/docs/features/Sort.md)

* **General Requirements:**
  * pass a stateKey to Enhanced component
  * items need a stable id as identifier
* **Magic Column Requirements:**
  * use withSort enhancement

## Demo

* [Showcases](https://react-redux-composable-list-showcases.wieruch.com/)
  * With Magic Column
* [Real World](https://react-redux-composable-list-realworld.wieruch.com/)

## Definition

```javascript
import { components, enhancements } from 'react-redux-composable-list';
const { Enhanced, Row, Cell, CellMagicHeader, CellMagic } = components;
const { withSelectables } = enhancements;

const SORTS_ASC_DESC = {
  ASC: <span>(asc)</span>,
  DESC: <span>(desc)</span>,
};

const titleSort = item => item.title;
const commentSort = item => item.comment;
const votesSort = item => item.votes;
const likesSort = item => item.likes;

const magicSorts = [
  {
    label: 'Comment',
    sortKey: 'comment',
    sortFn: commentSort,
    resolve: (item) => item.comment,
  },
  {
    label: 'Votes',
    sortKey: 'votes',
    sortFn: votesSort,
    resolve: (item) => item.votes,
  },
  {
    label: 'Likes',
    sortKey: 'likes',
    sortFn: likesSort,
    resolve: (item) => item.likes,
  },
];

const MagicColumnsList = ({ list, stateKey }) =>
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
        <CellMagicHeader
          magicSorts={magicSorts}
          suffix={SORTS_ASC_DESC}>
          (Magic!)
        </CellMagicHeader>
      </HeaderCell>
    </Row>
    {list.map(item =>
      <Row key={item.id}>
        <Cell style={{ width: '70%' }}>{item.title}</Cell>
        <Cell style={{ width: '30%' }}>
          <CellMagic item={item} magicSorts={magicSorts} />
        </Cell>
      </Row>
    )}
  </Enhanced>

export default withSort()(MagicColumnsList);
```

## Usage

```javascript
import MagicColumnsList from 'path/to/component';

const list = [
  { id: '1', title: 'foo', comment: 'foo foo', likes: 1, votes: 2 },
  { id: '2', title: 'bar', comment: 'bar bar', likes: 3, votes: 4 },
];

const App = () =>
  <MagicColumnsList
    list={list}
    stateKey={'MY_MAGIC_COLUMNS_LIST'}
  />
```

## Enhancer Components

The CellMagicHeader component, when using the `withSort` enhancement, is an [Enhancer Component](/docs/recipes/Consumer.md) that wraps the library API and alters the Sort enhancement state.
