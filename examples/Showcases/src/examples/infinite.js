import React from 'react';
import Infinite from 'react-infinite';

import { components } from 'react-redux-data-grid';
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

const InfiniteDataGrid = ({ list, stateKey }) =>
  <DataGrid stateKey={stateKey}>
    <Infinite containerHeight={300} elementHeight={36}>
    {list.map(item =>
        <Row key={item.id}>
          <Cell style={WIDTHS.MEDIUM}>{item.title}</Cell>
          <Cell style={WIDTHS.MEDIUM}>{item.comment}</Cell>
        </Row>
    )}
    </Infinite>
  </DataGrid>

export default InfiniteDataGrid;