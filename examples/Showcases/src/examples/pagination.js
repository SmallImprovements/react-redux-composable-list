import React from 'react';
import { compose } from 'recompose';

import { components, enhancements } from 'react-redux-composeable-list';
const { DataGrid, Row, Cell } = components;
const { withPaginate } = enhancements;

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

const PaginationDataGrid = ({ list, stateKey }) =>
  <DataGrid stateKey={stateKey}>
    {list.map(item =>
      <Row key={item.id} id={item.id}>
        <Cell style={WIDTHS.MEDIUM}>{item.title}</Cell>
        <Cell style={WIDTHS.MEDIUM}>{item.comment}</Cell>
      </Row>
    )}
  </DataGrid>

export default compose(
  withPaginate({ size: 10 })
)(PaginationDataGrid);
