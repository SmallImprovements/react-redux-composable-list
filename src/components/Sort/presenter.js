import React from 'react';
import classNames from 'classnames';

import SortCaret from '../../helper/components/SortCaret';

import './style.less';

const Sort = ({ isActive, isReverse, onSort, children }) => {
  const linkClass = classNames(
    'react-redux-data-grid-sort',
    {
      'react-redux-data-grid-sort-active': isActive
    }
  );

  return (
    <div>
      <a
        onClick={onSort}
        className={linkClass}>
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
};

export default Sort;
