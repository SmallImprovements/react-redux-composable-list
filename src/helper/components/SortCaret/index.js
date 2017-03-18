import React from 'react';

import './style.less';

function SortCaret({ isActive, isReverse }) {
  const icon = isReverse ? 'asc' : 'desc';
  return !!isActive && <span className={icon} />;
}

export default SortCaret;
