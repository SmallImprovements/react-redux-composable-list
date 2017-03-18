import React from 'react';
// import * as styles from '../styles';
import '../style.css';
import cs from 'classnames';

// const cellStyle = { ...styles.cell, ...styles.cellBody };

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
