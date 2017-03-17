import React from 'react';
import * as styles from '../styles';

const HeaderCell = ({
  style,
  className = '',
  children
}) =>
  <div
    className={className}
    style={syle || styles.cell}
  >
    {children}
  </div>;

export default HeaderCell;
