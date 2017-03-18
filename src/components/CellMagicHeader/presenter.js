import React from 'react';
import classNames from 'classnames';
import { map } from 'lodash';

import './style.less';

import SortCaret from '../../helper/components/SortCaret';

const getLinkClass = (sortKey, isActive) =>
  classNames(
    'inline',
    {
      'active': isActive(sortKey)
    }
  );

                // <Icon icon="fa fa-magic" />
const CellMagicHeader = ({
  primarySort,
  magicSorts,
  isActive,
  isReverse,
  onSort,
  onSetMagic
}) =>
  <div className={classNames('light', 'custom-column', 'header')}>
    <a
      onClick={() => onSort(primarySort.sortKey, primarySort.sortFn)}
      className={getLinkClass(primarySort.sortKey, isActive)}>
      {primarySort.label}
      {' '}
      <SortCaret isActive={isActive(primarySort.sortKey)} isReverse={isReverse} />
    </a>
    <a className={classNames('column-selector-sign', getLinkClass(primarySort.sortKey, isActive))}>
    </a>
    <ul className="custom-column-selector">
      <li
        key="custom-column-selector-heading"
        className="custom-column-selector-info">
        <small>Toggle column data to:</small>
      </li>
      {map(magicSorts, ({ sortKey, sortFn, label }, key) =>
        <li key={key}>
            <a
                onClick={() => onSetMagic(sortKey)}
                className={getLinkClass(sortKey, isActive)}>
                {label}
            </a>
        </li>
      )}
    </ul>
  </div>;

CellMagicHeader.propTypes = {
  isActive: React.PropTypes.func,
  isReverse: React.PropTypes.bool,
  onSort: React.PropTypes.func,
};

export default CellMagicHeader;
