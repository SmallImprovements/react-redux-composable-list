import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SortCaret from '../../helper/components/SortCaret';
import { sort } from '../../helper/services';
import './style.less';

const getLinkClass = (active) => {
  const linkClasses = ['react-redux-composable-list-row-magic-header-inline'];
  if (active) {
    linkClasses.push('react-redux-composable-list-row-magic-header-active');
  }
  return linkClasses.join(' ');
}

class CellMagicHeader extends Component {
  state = {
    isColumnSelectorShown: false,
  };

  setColumnSelectorShown = (isShown) => {
    if (isShown) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
    this.setState({
      isColumnSelectorShown: isShown,
    });
  };

  handleOutsideClick = (e) => {
    const isClickOnButton = this.buttonNode && this.buttonNode.contains(e.target);
    const isClickInsideColumnSelector = this.columnSelectorNode && this.columnSelectorNode.contains(e.target);
    if (!(isClickOnButton || isClickInsideColumnSelector)) {
      this.setColumnSelectorShown(false);
    }
  };

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  render() {
    const {
      primarySort,
      magicSorts,
      isActive,
      isReverse,
      onSort,
      onSetMagic,
      suffix,
      children
    } = this.props;
    const { isColumnSelectorShown } = this.state;
    const onSortPrimary = (newIsReverse) => onSort(primarySort.sortKey, primarySort.sortFn, newIsReverse);
    const handlePrimarySortClickAsc = () => onSortPrimary(false);
    const handlePrimarySortClickDesc = () => onSortPrimary(true);
    const handleMagicSortClick = (magicSort) => {
      const wasSortingActive = isActive(primarySort.sortKey);
      onSetMagic(magicSort.sortKey);
      if (wasSortingActive) {
        // Sort by the newly-selected column if sorting was active before.
        onSort(magicSort.sortKey, magicSort.sortFn, isReverse);  
      }
    };
    const toggleColumnSelector = () => this.setColumnSelectorShown(!isColumnSelectorShown);
    return (
      <div 
        className={[
          'react-redux-composable-list-row-magic-header-custom-column',
          'react-redux-composable-list-row-magic-header'
        ].join(' ')}
        role="columnheader"
        aria-sort={sort.getAriaSort(isActive(primarySort.sortKey), isReverse)}>
        <a className={[
            'react-redux-composable-list-row-magic-header-column-selector',
            getLinkClass(isActive(primarySort.sortKey))
          ].join(' ')}
          onClick={toggleColumnSelector}
          onKeyPress={sort.callIfActionKey(toggleColumnSelector)}
          aria-label={primarySort.label}
          aria-haspopup="true"
          aria-expanded={isColumnSelectorShown}
          role="button"
          ref={ref => { this.buttonNode = ref }}>
          {primarySort.label}
          {children}
          <SortCaret suffix={suffix} isActive={isActive(primarySort.sortKey)} isReverse={isReverse} />
        </a>
        <div className={[
          'react-redux-composable-list-row-magic-header-custom-column-selector',
            isColumnSelectorShown ? 'react-redux-composable-list-row-magic-header-custom-column-selector-shown' : '',
          ].join(' ')}
          ref={node => { this.columnSelectorNode = node; }}
          role="menu">
          <ul>
            <li
              className="react-redux-composable-list-row-magic-header-custom-column-selector-info"
              aria-hidden={true}>
              <small>Sorting</small>
            </li>
            <li>
              <a
                onClick={handlePrimarySortClickAsc}
                onKeyPress={sort.callIfActionKey(handlePrimarySortClickAsc)}
                className={getLinkClass(isActive(primarySort.sortKey) && !isReverse)}
                role="button">
                Ascending
              </a>
            </li>
            <li>
              <a
                onClick={handlePrimarySortClickDesc}
                onKeyPress={sort.callIfActionKey(handlePrimarySortClickDesc)}
                className={getLinkClass(isActive(primarySort.sortKey) && isReverse)}
                role="button">
                Descending
              </a>
            </li>
          </ul>
          <ul>
            <li
              className="react-redux-composable-list-row-magic-header-custom-column-selector-info"
              aria-hidden={true}>
              <small>Toggle column to</small>
            </li>
            {magicSorts.map((magicSort, key) =>
              <li key={key} role="presentation">
                <a
                  onClick={() => handleMagicSortClick(magicSort)}
                  role="menuitemradio"
                  aria-checked={primarySort.sortKey === magicSort.sortKey}
                  className={getLinkClass(primarySort.sortKey === magicSort.sortKey)}>
                  {magicSort.label}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

CellMagicHeader.propTypes = {
  primarySort: PropTypes.object.isRequired,
  magicSorts: PropTypes.array.isRequired,
  isActive: PropTypes.func.isRequired,
  isReverse: PropTypes.bool,
  onSort: PropTypes.func.isRequired,
  onSetMagic: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default CellMagicHeader;
