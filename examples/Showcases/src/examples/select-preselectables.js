import React from 'react';
import { compose } from 'recompose';

import { components, enhancements } from 'react-redux-data-grid';
const { DataGrid, Row, Cell } = components;
const { withPreselectables, withSelectables } = enhancements;

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

const SelectPreselectablesDataGrid = ({ list, isSelectable, preselected, stateKey }) =>
  <DataGrid stateKey={stateKey} isSelectable={isSelectable} preselected={preselected}>
    {list.map(item =>
      <Row key={item.id} id={item.id}>
        <Cell style={WIDTHS.MEDIUM}>{item.title}</Cell>
        <Cell style={WIDTHS.MEDIUM}>{item.comment}</Cell>
      </Row>
    )}
  </DataGrid>

export default compose(
  withSelectables({ ids: [] }),
  withPreselectables({ ids: [1, 2] })
)(SelectPreselectablesDataGrid);
