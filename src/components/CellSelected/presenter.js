import React, { PropTypes, createElement } from 'react';

const CellSelected = ({ state, children }) =>
  <div>
    {children[state]}
  </div>;

CellSelected.propTypes = {
  state: PropTypes.string.isRequired,
};

export default CellSelected;
