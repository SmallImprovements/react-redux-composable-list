import React from 'react';
import { connect } from 'react-redux';

import { getContext } from '../../helper/util/getContext';
import { find } from '../../helper/util/find';

import { selectors } from '../../ducks';
import CellMagic from './presenter';

function mapStateToProps(state, { magicSorts, stateKey, item }) {
  const sortKey = selectors.getMagicSort(state, stateKey, magicSorts);
  const activeMagicSort = find(magicSorts, (s) => s.sortKey === sortKey);
  return {
    item,
    activeMagicSort,
  };
}

const contextTypes = {
  stateKey: React.PropTypes.string.isRequired
};

export default getContext(contextTypes)(connect(mapStateToProps)(CellMagic));
