import React from 'react';

import './style.less';

import SortCaret from '../../helper/components/SortCaret';

const getLinkClass = (sortKey, isActive) => {
  const linkClass = ['react-redux-composeable-list-row-magic-header-inline'];

  if (isActive(sortKey)) {
    linkClass.push('react-redux-composeable-list-row-magic-header-active');
  }

  return linkClass.join(' ');
}

const CellMagicHeader = ({
  primarySort,
  magicSorts,
  isActive,
  isReverse,
  onSort,
  onSetMagic,
  suffix,
  children
}) =>
  <div className={[
      'react-redux-composeable-list-row-magic-header-custom-column',
      'react-redux-composeable-list-row-magic-header'
    ].join(' ')}>
    <a
      onClick={() => onSort(primarySort.sortKey, primarySort.sortFn)}
      className={getLinkClass(primarySort.sortKey, isActive)}>
      {primarySort.label}
      &nbsp;
      <SortCaret suffix={suffix} isActive={isActive(primarySort.sortKey)} isReverse={isReverse} />
    </a>
    <a className={[
        'react-redux-composeable-list-row-magic-header-column-selector-sign',
        getLinkClass(primarySort.sortKey, isActive)
      ].join(' ')}>
      {children}
    </a>
    <ul className="react-redux-composeable-list-row-magic-header-custom-column-selector">
      <li
        key="react-redux-composeable-list-row-magic-header-custom-column-selector-heading"
        className="react-redux-composeable-list-row-magic-header-custom-column-selector-info">
        <small>Toggle column data to:</small>
      </li>
      {magicSorts.map(({ sortKey, sortFn, label }, key) =>
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
  primarySort: React.PropTypes.object.isRequired,
  magicSorts: React.PropTypes.array.isRequired,
  isActive: React.PropTypes.func.isRequired,
  isReverse: React.PropTypes.bool,
  onSort: React.PropTypes.func.isRequired,
  onSetMagic: React.PropTypes.func.isRequired,
  children: React.PropTypes.node,
};

export default CellMagicHeader;
