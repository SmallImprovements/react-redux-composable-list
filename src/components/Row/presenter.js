import React from 'react';
import classNames from 'classnames';

import { selectHelper } from '../../helper';

import './style.less';

const CLASS_MAPPING = {
  [selectHelper.SELECT_STATES.selected]: 'selected',
  [selectHelper.SELECT_STATES.notSelected]: 'selectable',
  [selectHelper.SELECT_STATES.preSelected]: 'unselectable',
  [selectHelper.SELECT_STATES.unselectable]: 'unselectable',
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

  const onClick = selectState === selectHelper.SELECT_STATES.selected ||
    selectState === selectHelper.SELECT_STATES.notSelected
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
