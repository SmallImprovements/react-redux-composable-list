import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getContext } from '../../helper/util/getContext';

import { selectors } from '../../ducks';
import CellSelected from './presenter';
import { select } from '../../helper/services';

const mapStateToProps = (state, { stateKey, id, preselected = [], unselectables = [] }) => {
  const isSelected = selectors.getIsSelected(state, stateKey, id);

  return {
    state: select.getSelectState(id, isSelected, preselected, unselectables),
  };
}

const contextTypes = {
  stateKey: PropTypes.string.isRequired,
  preselected: PropTypes.array,
  unselectables: PropTypes.array,
};

export default getContext(contextTypes)(connect(mapStateToProps)(CellSelected));
