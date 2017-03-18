import React from 'react';
import '../style.less';
import cs from 'classnames';

const Cell = ({
  style,
  className = '',
  children
}) =>
  <div
    className={className || cs('cell', 'cell-body')}
    style={style}
  >
    {children}
  </div>;

export default Cell;
