import React from 'react';
import * as styles from '../styles';

const cellStyle = { ...styles.cell, ...styles.cellBody };

const Cell = ({
  style,
  className = '',
  children
}) =>
  <div
    className={className}
    style={style || cellStyle}
  >
    {children}
  </div>;

export default Cell;
