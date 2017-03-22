import React, { PropTypes } from 'react';

const CellSelected = ({ state, children }) =>
  <div>
    {children[state]}
  </div>;

CellSelected.propTypes = {
  state: PropTypes.string.isRequired,
  children: React.PropTypes.object.isRequired
};

export default CellSelected;
