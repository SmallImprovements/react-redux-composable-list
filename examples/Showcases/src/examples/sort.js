import React from 'react';
import { compose } from 'recompose';

import { components, enhancements } from 'react-redux-data-grid';
const { DataGrid, Row, Cell, HeaderCell, Sort } = components;
const { withSort } = enhancements;

const WIDTHS = {
  SMALL: {
    width: '25%',
  },
  MEDIUM: {
    width: '50%',
  },
  LARGE: {
    width: '75%',
  },
};

const SORTS_ASC_DESC = {
  ASC: <span>(asc)</span>,
  DESC: <span>(desc)</span>,
};

const titleSort = item => item.title;
const commentSort = item => item.comment;

const SortDataGrid = ({ list, stateKey }) =>
  <DataGrid stateKey={stateKey}>
    <Row>
      <HeaderCell style={WIDTHS.MEDIUM}>
        <Sort
          sortKey={'title'}
          sortFn={titleSort}
          suffix={SORTS_ASC_DESC}>
          Title
        </Sort>
      </HeaderCell>
      <HeaderCell style={WIDTHS.MEDIUM}>
        <Sort
          sortKey={'comment'}
          sortFn={commentSort}
          suffix={SORTS_ASC_DESC}>
          Comment
        </Sort>
      </HeaderCell>
    </Row>
    {list.map(item =>
      <Row key={item.id}>
        <Cell style={WIDTHS.MEDIUM}>{item.title}</Cell>
        <Cell style={WIDTHS.MEDIUM}>{item.comment}</Cell>
      </Row>
    )}
  </DataGrid>

export default compose(
  withSort()
)(SortDataGrid);
