import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getContext } from '../../helper/util/getContext';
import { actionCreators, selectors } from '../../ducks';
import Sort from './presenter';

function mapStateToProps(state, { sortKey, stateKey }) {
  const { sortKey: stateSortKey, isReverse } = selectors.getSort(state, stateKey);
  return {
    isActive: sortKey === stateSortKey,
    isReverse,
  };
}

function mapDispatchToProps(dispatch, { sortKey, sortFn, stateKey }) {
  return {
    onSort: bindActionCreators(() => actionCreators.doTableSort(stateKey, sortKey, sortFn), dispatch),
  };
}

const contextTypes = {
  stateKey: PropTypes.string.isRequired
};

export default getContext(contextTypes)(connect(mapStateToProps, mapDispatchToProps)(Sort));
