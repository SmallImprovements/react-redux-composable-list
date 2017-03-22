import React from 'react';
import { compose } from 'recompose';

import { components, enhancements } from 'react-redux-data-grid';
const { DataGrid, Row, Cell } = components;
const { withUnselectables, withSelectables } = enhancements;

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

const SelectUnselectablesDataGrid = ({ list, isSelectable, unselectables, stateKey }) =>
  <DataGrid stateKey={stateKey} isSelectable={isSelectable} unselectables={unselectables}>
    {list.map(item =>
      <Row key={item.id} id={item.id}>
        <Cell style={WIDTHS.MEDIUM}>{item.title}</Cell>
        <Cell style={WIDTHS.MEDIUM}>{item.comment}</Cell>
      </Row>
    )}
  </DataGrid>

export default compose(
  withSelectables({ ids: [] }),
  withUnselectables({ ids: [1, 2] })
)(SelectUnselectablesDataGrid);
