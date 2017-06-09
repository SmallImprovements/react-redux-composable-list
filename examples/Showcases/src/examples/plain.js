import React from 'react';

import { components } from 'react-redux-composeable-list';
const { DataGrid, Row, Cell } = components;

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

const PlainDataGrid = ({ list, stateKey }) =>
  <DataGrid stateKey={stateKey}>
    {list.map(item =>
      <Row key={item.id}>
        <Cell style={WIDTHS.MEDIUM}>{item.title}</Cell>
        <Cell style={WIDTHS.MEDIUM}>{item.comment}</Cell>
      </Row>
    )}
  </DataGrid>

export default PlainDataGrid;