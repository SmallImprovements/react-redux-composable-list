import React from 'react';
import cs from 'classnames';

import '../style.less';

const Cell = ({
  style,
  className = '',
  children
}) =>
  <div
    className={className || cs('react-redux-data-grid-cell', 'react-redux-data-grid-cell-body')}
    style={style}
  >
    {children}
  </div>;

Cell.propTypes = {
  style: React.PropTypes.object,
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

export default Cell;
