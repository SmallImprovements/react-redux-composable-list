import PropTypes from 'prop-types';
import React from 'react';

const CellSelected = ({ state, children }) =>
  <div>
    {children[state]}
  </div>;

CellSelected.propTypes = {
  state: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
};

export default CellSelected;
