import PropTypes from 'prop-types';
import React from 'react';

import { select } from '../../helper/services';
import { noop } from '../../helper/util/noop';

import './style.less';

const CLASS_MAPPING = {
  [select.SELECT_STATES.selected]: 'react-redux-composable-list-row-selected',
  [select.SELECT_STATES.notSelected]: 'react-redux-composable-list-row-selectable',
  [select.SELECT_STATES.preSelected]: 'react-redux-composable-list-row-unselectable',
  [select.SELECT_STATES.unselectable]: 'react-redux-composable-list-row-unselectable',
};

const Row = ({
  isSelectable,
  ...props
}) =>
  isSelectable
    ? <RowSelectable { ...props } />
    : <RowNormal { ...props } />;

Row.propTypes = {
  isSelectable: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const RowSelectable = ({
  selectState,
  onSelect,
  children
}) => {
  const rowClass = ['react-redux-composable-list-row', CLASS_MAPPING[selectState]];
  const hasSelectState = selectState === select.SELECT_STATES.selected ||
    selectState === select.SELECT_STATES.notSelected;

  const handleClick = hasSelectState
    ? event => onSelect({ event })
    : noop;

  return (
    <div
      onClick={handleClick}
      className={rowClass.join(' ')}>
      {children}
    </div>
  );
};

RowSelectable.propTypes = {
  selectState: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const RowNormal = ({
  style,
  className = '',
  children
}) =>
  <div
    className={className || 'react-redux-composable-list-row'}
    style={style}
  >
    {children}
  </div>;

RowNormal.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Row;
