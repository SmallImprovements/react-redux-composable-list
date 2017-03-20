import React from 'react';
import classNames from 'classnames';

import { select } from '../../helper/services';

import './style.less';

const CLASS_MAPPING = {
  [select.SELECT_STATES.selected]: 'selected',
  [select.SELECT_STATES.notSelected]: 'selectable',
  [select.SELECT_STATES.preSelected]: 'unselectable',
  [select.SELECT_STATES.unselectable]: 'unselectable',
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
    'row',
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
    className={className || 'row'}
    style={style}
  >
    {children}
  </div>;

export default Row;
