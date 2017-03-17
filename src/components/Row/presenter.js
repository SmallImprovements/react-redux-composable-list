import React from 'react';
import * as styles from '../styles';

const Row = ({
  style,
  className = '',
  children
}) =>
  <div
    className={className}
    style={style || styles.row}
  >
    {children}
  </div>;

export default Row;
