import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getContext } from 'recompose';

import { actionCreators, selectors } from '../../ducks';
import RowSelectable from './presenter';
import { selectHelper } from '../../helper';

const mapStateToProps = (
  state, {
    stateKey,
    id,
    isSelectable = false,
    preselected = [],
    unselectables = []
}) => {
  const isSelected = isSelectable
    ? selectors.getIsSelected(state, stateKey, id)
    : false;

  const selectState = isSelectable
    ? selectHelper.getSelectState(id, isSelected, preselected, unselectables)
    : null;

  return {
    isSelectable,
    selectState,
  };
}

const mapDispatchToProps = (dispatch, { stateKey, isSelectable, id }) => ({
  onSelect: isSelectable
    ? bindActionCreators(() => actionCreators.doSelectItem(stateKey, id), dispatch)
    : () => {}
});

const contextTypes = {
  stateKey: React.PropTypes.string.isRequired,
  isSelectable: React.PropTypes.bool,
  preselected: React.PropTypes.array,
  unselectables: React.PropTypes.array,
};

export default getContext(contextTypes)(connect(mapStateToProps, mapDispatchToProps)(RowSelectable));
