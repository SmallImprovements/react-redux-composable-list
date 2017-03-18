import React from 'react';
import classNames from 'classnames';

import './style.css';

function SortCaret({ isActive, isReverse }) {
  const icon = isReverse ? 'asc' : 'desc';
  return !!isActive && <span className={icon} />;
}

function CellSort({ isActive, isReverse, onSort, children }) {
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

CellSort.propTypes = {
  isActive: React.PropTypes.bool,
  isReverse: React.PropTypes.bool,
  onSort: React.PropTypes.func,
};

export default CellSort;
