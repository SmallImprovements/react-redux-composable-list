import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getContext } from 'recompose';
import { find } from 'lodash';

import { actionCreators, selectors } from '../../ducks';
import CellMagicHeader from './presenter';

function mapStateToProps(state, { magicSorts, stateKey }) {
  const { sortKey: stateSortKey, isReverse: stateIsReverse } = selectors.getSort(state, stateKey);
  const isActive = (sortKey) => sortKey === stateSortKey;

  const sortKey = selectors.getMagicSort(state, stateKey, magicSorts);
  const primarySort = find(magicSorts, (s) => s.sortKey === sortKey);

  const isReverse = stateIsReverse && isActive(sortKey);

  return {
    magicSorts,
    primarySort,
    isActive,
    isReverse,
  };
}

function mapDispatchToProps(dispatch, { stateKey }) {
  const { doTableSort, doSetMagicSort } = actionCreators;

  return bindActionCreators({
    onSort: (sortKey, sortFn) => doTableSort(stateKey, sortKey, sortFn),
    onSetMagic: (sortKey) => doSetMagicSort(stateKey, sortKey),
  }, dispatch);
}

const contextTypes = {
  stateKey: React.PropTypes.string.isRequired
};

export default getContext(contextTypes)(connect(mapStateToProps, mapDispatchToProps)(CellMagicHeader));
