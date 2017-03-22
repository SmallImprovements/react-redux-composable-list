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

export default Row;
