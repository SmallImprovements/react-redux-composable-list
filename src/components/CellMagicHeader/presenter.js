import React from 'react';
import classNames from 'classnames';
import { map } from 'lodash';

import './style.less';

import SortCaret from '../../helper/components/SortCaret';

const getLinkClass = (sortKey, isActive) =>
  classNames(
    'react-redux-data-grid-row-magic-header-inline',
    {
      'react-redux-data-grid-row-magic-header-active': isActive(sortKey)
    }
  );

const CellMagicHeader = ({
  primarySort,
  magicSorts,
  isActive,
  isReverse,
  onSort,
  onSetMagic,
  children
}) =>
  <div className={classNames(
      'react-redux-data-grid-row-magic-header-custom-column',
      'react-redux-data-grid-row-magic-header'
    )}>
    <a
      onClick={() => onSort(primarySort.sortKey, primarySort.sortFn)}
      className={getLinkClass(primarySort.sortKey, isActive)}>
      {primarySort.label}
      &nbsp;
      <SortCaret isActive={isActive(primarySort.sortKey)} isReverse={isReverse} />
    </a>
    <a className={classNames(
        'react-redux-data-grid-row-magic-header-column-selector-sign',
        getLinkClass(primarySort.sortKey, isActive
      ))}>
      {children}
    </a>
    <ul className="react-redux-data-grid-row-magic-header-custom-column-selector">
      <li
        key="react-redux-data-grid-row-magic-header-custom-column-selector-heading"
        className="react-redux-data-grid-row-magic-header-custom-column-selector-info">
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
