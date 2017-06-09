import React from 'react';
import { compose } from 'recompose';

import { components, enhancements } from 'react-redux-composeable-list';
const { Enhanced, Row, Cell, HeaderCell, Sort, CellMagicHeader, CellMagic } = components;
const { withSort } = enhancements;

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

const MagicColumnEnhanced = ({ list, stateKey }) =>
  <Enhanced stateKey={stateKey}>
    <Row>
      <HeaderCell style={WIDTHS.LARGE}>
        <Sort
          sortKey={'title'}
          sortFn={titleSort}
          suffix={SORTS_ASC_DESC}>
          Title
        </Sort>
      </HeaderCell>
      <HeaderCell style={WIDTHS.SMALL}>
        <CellMagicHeader
          magicSorts={magicSorts}
          suffix={SORTS_ASC_DESC}>
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
  </Enhanced>

export default compose(
  withSort()
)(MagicColumnEnhanced);
