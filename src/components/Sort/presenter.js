import React from 'react';
import classNames from 'classnames';

import SortCaret from '../../helper/components/SortCaret';

import './style.less';

function Sort({ isActive, isReverse, onSort, children }) {
  const linkClass = classNames(
    'inline',
    {
      'active': isActive
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
