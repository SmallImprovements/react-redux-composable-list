import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getContext } from 'recompose';
import { actionCreators, selectors } from '../../ducks';
import RowSelectable from './presenter';
import { selectHelper } from '../../helper';

function mapStateToProps(state, { stateKey, id, preselected = [], unselectables = [] }) {
  const isSelected = selectors.getIsSelected(state, stateKey, id);
  const selectState = selectHelper.getSelectState(id, isSelected, preselected, unselectables);

  return {
    selectState,
  };
}

function mapDispatchToProps(dispatch, { stateKey, id }) {
  return {
    onSelect: bindActionCreators(() => actionCreators.doSelectItem(stateKey, id), dispatch),
  };
}

const contextTypes = {
  stateKey: React.PropTypes.string.isRequired,
  preselected: React.PropTypes.array,
  unselectables: React.PropTypes.array,
};

export default getContext(contextTypes)(connect(mapStateToProps, mapDispatchToProps)(RowSelectable));
