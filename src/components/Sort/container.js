import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getContext } from 'recompose';
import { actionCreators, selectors } from '../../ducks';
import Sort from './presenter';

function mapStateToProps(state, { sortKey, stateKey }) {
  const { sortKey: stateSortKey, isReverse: stateIsReverse } = selectors.getSort(state, stateKey);
  const isActive = stateSortKey === sortKey;
  const isReverse = stateIsReverse && isActive;

  return {
    isActive,
    isReverse,
  };
}

function mapDispatchToProps(dispatch, { sortKey, sortFn, stateKey }) {
  return {
    onSort: bindActionCreators(() => actionCreators.doTableSort(stateKey, sortKey, sortFn), dispatch),
  };
}

const contextTypes = {
  stateKey: React.PropTypes.string.isRequired
};

export default getContext(contextTypes)(connect(mapStateToProps, mapDispatchToProps)(Sort));
