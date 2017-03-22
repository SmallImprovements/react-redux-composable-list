import React from 'react';
import classNames from 'classnames';

import { select } from '../../helper/services';

import './style.less';

const CLASS_MAPPING = {
  [select.SELECT_STATES.selected]: 'react-redux-data-grid-row-selected',
  [select.SELECT_STATES.notSelected]: 'react-redux-data-grid-row-selectable',
  [select.SELECT_STATES.preSelected]: 'react-redux-data-grid-row-unselectable',
  [select.SELECT_STATES.unselectable]: 'react-redux-data-grid-row-unselectable',
};

const Row = ({
  isSelectable,
  ...props
}) =>
  isSelectable
    ? <RowSelectable { ...props } />
    : <RowNormal { ...props } />;

Row.propTypes = {
  isSelectable: React.PropTypes.bool,
  style: React.PropTypes.object,
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

const RowSelectable = ({
  selectState,
  onSelect,
  children
}) => {
  const rowClass = classNames(
    'react-redux-data-grid-row',
    CLASS_MAPPING[selectState]
  );

  const onClick = selectState === select.SELECT_STATES.selected ||
    selectState === select.SELECT_STATES.notSelected
      ? onSelect
      : () => {};

  return (
    <div
      onClick={onClick}
      className={rowClass}>
      {children}
    </div>
  );
};

RowSelectable.propTypes = {
  selectState: React.PropTypes.string,
  onSelect: React.PropTypes.func.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ]).isRequired
};

const RowNormal = ({
  style,
  className = '',
  children
}) =>
  <div
    className={className || 'react-redux-data-grid-row'}
    style={style}
  >
    {children}
  </div>;

RowNormal.propTypes = {
  style: React.PropTypes.object,
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

export default Row;
