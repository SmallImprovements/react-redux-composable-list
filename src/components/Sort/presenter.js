import PropTypes from 'prop-types';
import React from 'react';

import './style.less';

import SortCaret from '../../helper/components/SortCaret';
import { sort } from '../../helper/services';

const Sort = ({ isActive, isReverse, onSort, suffix, children }) => {
  const linkClass = ['react-redux-composable-list-sort'];
  if (isActive) {
    linkClass.push('react-redux-composable-list-sort-active');
  }
  return (
    <div
      role="columnheader"
      aria-sort={sort.getAriaSort(isActive, isReverse)}>
      <a
        onClick={onSort}
        onKeyPress={sort.callIfActionKey(onSort)}
        className={linkClass.join(' ')}
        role="button">
        { children }
        &nbsp;
        <SortCaret suffix={suffix} isActive={isActive} isReverse={isReverse} />
      </a>
    </div>
  );
}

Sort.propTypes = {
  isActive: PropTypes.bool,
  isReverse: PropTypes.bool,
  onSort: PropTypes.func,
  children: PropTypes.node,
};

export default Sort;
