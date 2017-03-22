import React from 'react';
import { map, noop } from 'lodash';
import classNames from 'classnames';

import './style.less';

function getTooltip(page, step, get = noop) {
  const fromValue = get(step[0]);
  const toValue = get(step[step.length - 1]);

  return !(fromValue || toValue)
    ? `Page ${page + 1}`
    : `Page ${page + 1} - From ${fromValue || 'N/A'} to ${toValue || 'N/A'}`;
}

const Step = ({
  step,
  currentPage,
  page,
  get,
  onPaginate,
  dotted
}) => {
  const tooltip = getTooltip(page, step, get);
  const btnClass = classNames(
    'button',
    {
      'is-selected': page === currentPage
    }
  );

  return (
    <button
      className={btnClass}
      onClick={() => onPaginate(page)}
      title={tooltip}
      type="button"
    >
      <span>
        { dotted ? '' : (page + 1) }
      </span>
    </button>
  );
}

const Pagination = ({ paginatedLists, currentPage, get, onPaginate, dotted }) => {
  if (paginatedLists.length < 2) {
    return null;
  }

  const paginationClass = classNames({
    'react-redux-data-grid-row-pagination-button-container': !dotted,
    'react-redux-data-grid-row-pagination-dot-container': dotted
  });

  return (
    <div className={paginationClass}>
      {map(paginatedLists, (step, key) => {
        const props = {
          step,
          currentPage,
          get,
          page: key,
          onPaginate,
          dotted
        };
        return <Step key={key} { ...props } />;
      })}
    </div>
  );
}

export default Pagination;
