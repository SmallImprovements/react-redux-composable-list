import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './style.less';

import SortCaret from '../../helper/components/SortCaret';
import { sort } from '../../helper/services';

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
    return (
      <div className={[
        'react-redux-composable-list-row-magic-header-custom-column',
        'react-redux-composable-list-row-magic-header'
      ].join(' ')}>
        <a
          onClick={() => onSort(primarySort.sortKey, primarySort.sortFn)}
          className={getLinkClass(primarySort.sortKey, isActive)}
          role="button"
          aria-sort={sort.getAriaSort(isActive(primarySort.sortKey), isReverse)}>
          {primarySort.label}
          &nbsp;
          <SortCaret suffix={suffix} isActive={isActive(primarySort.sortKey)} isReverse={isReverse} />
        </a>
        <a className={[
            'react-redux-composable-list-row-magic-header-column-selector-sign',
            getLinkClass(primarySort.sortKey, isActive)
          ].join(' ')}
          aria-label="Toggle column data"
          aria-haspopup="true"
          aria-expanded={isColumnSelectorShown}
          onClick={() => this.setColumnSelectorShown(!isColumnSelectorShown)}>
          {children}
        </a>
        <ul className={[
          'react-redux-composable-list-row-magic-header-custom-column-selector',
            isColumnSelectorShown ? 'react-redux-composable-list-row-magic-header-custom-column-selector-shown' : '',
          ].join(' ')}
          ref={node => { this.columnSelectorNode = node; }}
          role="menu">
          <li
            key="react-redux-composable-list-row-magic-header-custom-column-selector-info"
            className="react-redux-composable-list-row-magic-header-custom-column-selector-info"
            aria-hidden={true}>
            <small>Toggle column data to:</small>
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
