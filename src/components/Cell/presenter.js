import React from 'react';

import '../style.less';

const Cell = ({
  style,
  className = '',
  children
}) =>
  <div
    className={className || ['react-redux-composable-list-cell', 'react-redux-composable-list-cell-body'].join(' ')}
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
