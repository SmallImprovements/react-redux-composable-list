import React from 'react';
import '../style.css';

const HeaderCell = ({
  style,
  className = '',
  children
}) =>
  <div
    className={className || 'cell'}
    style={style}
  >
    {children}
  </div>;

export default HeaderCell;
