import PropTypes from 'prop-types';
import React from 'react';
import '../style.less';

const isChildString = children => typeof children === 'string';

const HeaderCell = ({
  style,
  className = '',
  children
}) =>
  <div
    className={className || 'react-redux-composable-list-cell'}
    style={style}
    role={isChildString(children) ? 'columnheader' : 'presentation'}
  >
    {children}
  </div>;

HeaderCell.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default HeaderCell;
