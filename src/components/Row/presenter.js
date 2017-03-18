import React from 'react';
import '../style.css';

const Row = ({
  style,
  className = '',
  children
}) =>
  <div
    className={className || 'row'}
    style={style}
  >
    {children}
  </div>;

export default Row;
