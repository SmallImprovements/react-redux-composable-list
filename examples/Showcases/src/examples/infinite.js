import React from 'react';
import Infinite from 'react-infinite';

import { components } from 'react-redux-composeable-list';
const { Enhanced, Row, Cell } = components;

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

const InfiniteEnhanced = ({ list, stateKey }) =>
  <Enhanced stateKey={stateKey}>
    <Infinite containerHeight={300} elementHeight={36}>
    {list.map(item =>
        <Row key={item.id}>
          <Cell style={WIDTHS.MEDIUM}>{item.title}</Cell>
          <Cell style={WIDTHS.MEDIUM}>{item.comment}</Cell>
        </Row>
    )}
    </Infinite>
  </Enhanced>

export default InfiniteEnhanced;