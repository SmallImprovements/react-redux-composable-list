import React from 'react';
import { compose } from 'recompose';

import { components, enhancers } from 'react-redux-data-grid';
const { DataGrid, Row, Cell, HeaderCell, CellSort, CellMagicHeader, CellMagic } = components;
const { withSort } = enhancers;

const WIDTHS = {
  SMALL: {
    width: '35%',
  },
  MEDIUM: {
    width: '50%',
  },
  LARGE: {
    width: '65%',
  },
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

const MagicColumnDataGrid = ({ list, stateKey }) =>
  <DataGrid stateKey={stateKey}>
    <Row>
      <HeaderCell style={WIDTHS.LARGE}>
        <CellSort
          sortKey={'title'}
          sortFn={titleSort}>
          Title
        </CellSort>
      </HeaderCell>
      <HeaderCell style={WIDTHS.SMALL}>
        <CellMagicHeader
          magicSorts={magicSorts}>
          (Magic!)
        </CellMagicHeader>
      </HeaderCell>
    </Row>
    {list.map(item =>
      <Row key={item.id}>
        <Cell style={WIDTHS.LARGE}>{item.title}</Cell>
        <Cell style={WIDTHS.SMALL}>
          <CellMagic item={item} magicSorts={magicSorts} />
        </Cell>
      </Row>
    )}
  </DataGrid>

export default compose(
  withSort
)(MagicColumnDataGrid);
