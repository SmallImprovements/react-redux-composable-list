import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getContext } from '../../helper/util/getContext';

import { find } from '../../helper/util/find';

import { actionCreators, selectors } from '../../ducks';
import CellMagicHeader from './presenter';

function mapStateToProps(state, { magicSorts, stateKey }) {
  const { sortKey: stateSortKey, isReverse } = selectors.getSort(state, stateKey);
  const isActive = (sortKey) => sortKey === stateSortKey;
  const sortKey = selectors.getMagicSort(state, stateKey, magicSorts);
  const primarySort = find(magicSorts, (s) => s.sortKey === sortKey);
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
    onSort: (sortKey, sortFn, isReverse) => doTableSort(stateKey, sortKey, sortFn, isReverse),
    onSetMagic: (sortKey) => doSetMagicSort(stateKey, sortKey),
  }, dispatch);
}

const contextTypes = {
  stateKey: PropTypes.string.isRequired
};

export default getContext(contextTypes)(connect(mapStateToProps, mapDispatchToProps)(CellMagicHeader));
