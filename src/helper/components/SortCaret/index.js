import React from 'react';

import './style.less';

function SortCaret({ isActive, isReverse }) {
  const icon = isReverse ? 'react-redux-data-grid-sort-caret-asc' : 'react-redux-data-grid-sort-caret-desc';
  return !!isActive && <span className={icon} />;
}

export default SortCaret;
