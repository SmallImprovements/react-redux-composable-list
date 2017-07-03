import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Icon } from 'react-fa';

import { components, enhancements } from 'react-redux-composable-list';

const {
  Enhanced,
  Row,
  Cell,
  HeaderCell,
  Sort,
  SortSelected,
  CellSelected,
  CellMagicHeader,
  CellMagic,
} = components;

const {
  withSelectables,
  withUnselectables,
  withPreselectables,
  withSort,
  withFilter,
  withPaginate,
  withEmpty,
} = enhancements;

const WIDTHS = {
  SMALL: {
    width: '10%',
  },
  MEDIUM: {
    width: '20%',
  },
  LARGE: {
    width: '70%',
  },
};

const SORTS_ASC_DESC = {
  ASC: <Icon name="caret-down" />,
  DESC: <Icon name="caret-up" />,
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

const SelectSortEnhanced = ({
  list,
  isSelectable,
  unselectables,
  preselected,
  stateKey
}) =>
  <Enhanced
    stateKey={stateKey}
    isSelectable={isSelectable}
    unselectables={unselectables}
    preselected={preselected}>
    <Row>
      <HeaderCell style={WIDTHS.LARGE}>
        <Sort
          sortKey={'title'}
          sortFn={titleSort}
          suffix={SORTS_ASC_DESC}>
          Title
        </Sort>
      </HeaderCell>
      <HeaderCell style={WIDTHS.MEDIUM}>
        <CellMagicHeader
          magicSorts={magicSorts}
          suffix={SORTS_ASC_DESC}>
          <Icon name="magic" />
        </CellMagicHeader>
      </HeaderCell>
      <HeaderCell style={{ ...WIDTHS.SMALL, textAlign: 'right' }}>
        <SortSelected
          sortKey={'selected'}
          suffix={SORTS_ASC_DESC}>
          Selected
        </SortSelected>
      </HeaderCell>
    </Row>
    {list.map(item =>
      <Row key={item.id} id={item.id}>
        <Cell style={WIDTHS.LARGE}>{item.title}</Cell>
        <Cell style={WIDTHS.MEDIUM}>
          <CellMagic item={item} magicSorts={magicSorts} />
        </Cell>
        <Cell style={{ ...WIDTHS.SMALL, textAlign: 'right' }}>
          <CellSelected id={item.id}>
            {{
              SELECTED: <Icon name="check-square-o" />,
              NOT_SELECTED: <Icon name="square-o" />,
              PRE_SELECTED: <Icon name="check-square-o" />,
              UNSELECTABLE: <Icon name="square-o" />,
            }}
          </CellSelected>
        </Cell>
      </Row>
    )}
  </Enhanced>

// Empty Components, if filter result or in general list is empty or null

const EmptyBecauseFilter = () =>
  <div style={{ textAlign: 'center', padding: '40px' }}>
    <h3>No Filter Result</h3>
    <p>Sorry, there was no item matching your filter.</p>
  </div>

const EmptyBecauseNoList = () =>
  <div style={{ textAlign: 'center', padding: '40px' }}>
    <h3>Nothing to see!</h3>
    <p>Sorry, there is no content.</p>
  </div>

export default compose(
  withEmpty({ component: EmptyBecauseNoList }),
  withSelectables({ ids: [0] }),
  withPreselectables({ ids: [2, 3] }),
  withUnselectables({ ids: [4, 6] }),
  withFilter(),
  withEmpty({ component: EmptyBecauseFilter }),
  withSort({}),
  withPaginate({ size: 10 }),
)(SelectSortEnhanced);