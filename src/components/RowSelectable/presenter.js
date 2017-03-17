import React from 'react';
import classNames from 'classnames';
import rowStyles from '../../Components/Row/style.m.less';
import styles from './style.m.less';
import { selectHelper } from '../../services';

// TODO
import 'styles.css';

// TODO
const CLASS_MAPPING = {
  [selectService.SELECT_STATES.selected]: styles.selected,
  [selectService.SELECT_STATES.notSelected]: styles.selectable,
  [selectService.SELECT_STATES.preSelected]: styles.unselectable,
  [selectService.SELECT_STATES.unselectable]: styles.unselectable,
};

function RowSelectable({ selectState, onSelect, children }) {
  const rowClass = classNames(
    rowStyles.row,
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
}

export default RowSelectable;
