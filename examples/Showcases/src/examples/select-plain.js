import React from 'react';
import { compose } from 'recompose';

import { components, enhancers } from 'react-redux-data-grid';
const { DataGrid, Row, Cell } = components;
const { withSelectables } = enhancers;

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

const SelectPlainDataGrid = ({ list, stateKey, isSelectable }) =>
  <DataGrid stateKey={stateKey} isSelectable={isSelectable}>
    {list.map(item =>
      <Row key={item.id} id={item.id}>
        <Cell style={WIDTHS.MEDIUM}>{item.title}</Cell>
        <Cell style={WIDTHS.MEDIUM}>{item.comment}</Cell>
      </Row>
    )}
  </DataGrid>

export default compose(
  withSelectables({ ids: [] })
)(SelectPlainDataGrid);
