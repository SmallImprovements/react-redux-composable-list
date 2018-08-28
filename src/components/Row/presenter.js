import PropTypes from 'prop-types';
import React from 'react';

import { select } from '../../helper/services';

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
  children,
  isHeader
}) => {
  const rowClass = ['react-redux-composable-list-row', CLASS_MAPPING[selectState]];

  if (isHeader) {
    rowClass.push('react-redux-composable-list-row-header');
  }

  const onClick = selectState === select.SELECT_STATES.selected ||
    selectState === select.SELECT_STATES.notSelected
      ? onSelect
      : () => {};

  return (
    <div
      onClick={onClick}
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
  ]).isRequired,
  isHeader: PropTypes.bool
};

const RowNormal = ({
  style,
  className = '',
  children,
  isHeader
}) => {
  const classNameContainer = ['react-redux-composable-list-row'];

  if (className) {
    classNameContainer.push(className);
  }

  if (isHeader) {
    classNameContainer.push('react-redux-composable-list-row-header');
  }

  return (
    <div
      className={classNameContainer.join(' ')}
      style={style}
    >
      {children}
    </div>
  )
};

RowNormal.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  isHeader: PropTypes.bool
};

export default Row;
