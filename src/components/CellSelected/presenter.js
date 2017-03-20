import React, { PropTypes } from 'react';
import { select } from '../../helper/services';

import './style.less';

const CLASS_MAPPING = {
  [select.SELECT_STATES.selected]: 'fa fa-check-square react-select-checkbox-selected',
  [select.SELECT_STATES.notSelected]: 'fa fa-square-o react-select-checkbox-deselected',
  [select.SELECT_STATES.preSelected]: 'fa fa-check react-select-checkbox-preselected',
  [select.SELECT_STATES.unselectable]: 'react-select-checkbox-unselectable'
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
