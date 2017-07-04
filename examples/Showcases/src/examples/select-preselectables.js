import React from 'react';
import { compose } from 'recompose';

import { components, enhancements } from 'react-redux-composable-list';
const { Enhanced, Row, Cell } = components;
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

const SelectPreselectablesEnhanced = ({ list, stateKey }) =>
  <Enhanced stateKey={stateKey}>
    {list.map(item =>
      <Row key={item.id} id={item.id}>
        <Cell style={WIDTHS.MEDIUM}>{item.title}</Cell>
        <Cell style={WIDTHS.MEDIUM}>{item.comment}</Cell>
      </Row>
    )}
  </Enhanced>

export default compose(
  withSelectables({ ids: [] }),
  withPreselectables({ ids: [1, 2] })
)(SelectPreselectablesEnhanced);
