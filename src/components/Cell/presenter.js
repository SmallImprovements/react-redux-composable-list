import React from 'react';
import '../style.less';
import cs from 'classnames';

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

export default Cell;
