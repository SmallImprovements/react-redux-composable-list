import React from 'react';

const takeSuffix = (suffix, isReverse) =>
  isReverse ? suffix['DESC'] : suffix['ASC'];

const SortCaret = ({ suffix, isActive, isReverse }) =>
  <span>
    {(suffix && isActive)
      ? takeSuffix(suffix, isReverse)
      : null
    }
  </span>;

export default SortCaret;
