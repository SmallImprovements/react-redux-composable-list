import React from 'react';

import SortCaret from '../../helper/components/SortCaret';

import './style.less';

const Sort = ({ isActive, isReverse, onSort, children }) => {
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
        <SortCaret isActive={isActive} isReverse={isReverse} />
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
