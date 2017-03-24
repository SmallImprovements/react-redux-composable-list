import React from 'react';

import './style.less';

import SortCaret from '../../helper/components/SortCaret';

const Sort = ({ isActive, isReverse, onSort, suffix, children }) => {
  const linkClass = ['react-redux-data-grid-sort'];
  if (isActive) {
    linkClass.push('react-redux-data-grid-sort-active');
  }

  return (
    <div>
      <a
        onClick={onSort}
        className={linkClass.join(' ')}>
        { children }
        &nbsp;
        <SortCaret suffix={suffix} isActive={isActive} isReverse={isReverse} />
      </a>
    </div>
  );
}

Sort.propTypes = {
  isActive: React.PropTypes.bool,
  isReverse: React.PropTypes.bool,
  onSort: React.PropTypes.func,
  children: React.PropTypes.node,
};

export default Sort;
