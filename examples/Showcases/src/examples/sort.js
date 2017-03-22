import React from 'react';
import { compose } from 'recompose';

import { components, enhancers } from 'react-redux-data-grid';
const { DataGrid, Row, Cell, HeaderCell, CellSort } = components;
const { withSort } = enhancers;

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

const titleSort = item => item.title;
const commentSort = item => item.comment;

const SortDataGrid = ({ list, stateKey }) =>
  <DataGrid stateKey={stateKey}>
    <Row>
      <HeaderCell style={WIDTHS.MEDIUM}>
        <CellSort
          sortKey={'title'}
          sortFn={titleSort}>
          Title
        </CellSort>
      </HeaderCell>
      <HeaderCell style={WIDTHS.MEDIUM}>
        <CellSort
          sortKey={'comment'}
          sortFn={commentSort}>
          Comment
        </CellSort>
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
  withSort
)(SortDataGrid);
