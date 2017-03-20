import React, { PropTypes } from 'react';
import { selectHelper } from '../../helper';

import './style.less';

const CLASS_MAPPING = {
  [selectHelper.SELECT_STATES.selected]: 'fa fa-check-square react-select-checkbox-selected',
  [selectHelper.SELECT_STATES.notSelected]: 'fa fa-square-o react-select-checkbox-deselected',
  [selectHelper.SELECT_STATES.preSelected]: 'fa fa-check react-select-checkbox-preselected',
  [selectHelper.SELECT_STATES.unselectable]: 'react-select-checkbox-unselectable'
};

const CellSelected = ({ state }) =>
  <div className="select-checkbox">
    {CLASS_MAPPING[state]}
  </div>;
// <i className={CLASS_MAPPING[state]}></i>

CellSelected.propTypes = {
  state: PropTypes.string.isRequired,
};

export default CellSelected;
