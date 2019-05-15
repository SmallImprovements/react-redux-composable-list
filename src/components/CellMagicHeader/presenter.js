import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SortCaret from '../../helper/components/SortCaret';
import { sort } from '../../helper/services';
import './style.less';

const getLinkClass = (sortKey, isActive) => {
  const linkClass = ['react-redux-composable-list-row-magic-header-inline'];
  if (isActive(sortKey)) {
    linkClass.push('react-redux-composable-list-row-magic-header-active');
  }
  return linkClass.join(' ');
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
    const isClickInsideColumnSelector = this.columnSelectorNode && this.columnSelectorNode.contains(e.target);
    if (!isClickInsideColumnSelector) {
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
    const handleSortClick = () => onSort(primarySort.sortKey, primarySort.sortFn);
    const toggleColumnSelector = () => this.setColumnSelectorShown(!isColumnSelectorShown);
    return (
      <div 
        className={[
          'react-redux-composable-list-row-magic-header-custom-column',
          'react-redux-composable-list-row-magic-header'
        ].join(' ')}
        role="columnheader">
        <a className={[
            'react-redux-composable-list-row-magic-header-column-selector',
            getLinkClass(primarySort.sortKey, isActive)
          ].join(' ')}
          onClick={toggleColumnSelector}
          onKeyPress={sort.callIfActionKey(toggleColumnSelector)}
          aria-label={primarySort.label}
          aria-haspopup="true"
          aria-expanded={isColumnSelectorShown}
          role="button"
          tabIndex={0}>
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
              key="react-redux-composable-list-row-magic-header-custom-column-sorting-info"
              className="react-redux-composable-list-row-magic-header-custom-column-selector-info"
              aria-hidden={true}>
              <small>Sorting</small>
            </li>
            <li>
              <a
                onClick={handleSortClick}
                onKeyPress={sort.callIfActionKey(handleSortClick)}
                className={getLinkClass(primarySort.sortKey, isActive)}
                role="button"
                tabIndex={0}
                aria-sort={sort.getAriaSort(isActive(primarySort.sortKey), isReverse)}>
                Ascending
              </a>
            </li>
            <li>
              <a
                onClick={handleSortClick}
                onKeyPress={sort.callIfActionKey(handleSortClick)}
                className={getLinkClass(primarySort.sortKey, isActive)}
                role="button"
                tabIndex={0}
                aria-sort={sort.getAriaSort(isActive(primarySort.sortKey), isReverse)}>
                Descending
              </a>
            </li>
          </ul>
          <ul>
            <li
              key="react-redux-composable-list-row-magic-header-custom-column-selector-info"
              className="react-redux-composable-list-row-magic-header-custom-column-selector-info"
              aria-hidden={true}>
              <small>Toggle column to</small>
            </li>
            {magicSorts.map(({ sortKey, label }, key) =>
              <li key={key} role="presentation">
                <a
                  onClick={() => onSetMagic(sortKey)}
                  role="menuitemradio"
                  aria-checked={primarySort.sortKey === sortKey}
                  className={getLinkClass(sortKey, isActive)}>
                  {label}
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
