import React from 'react';

import { noop } from '../../helper/util/noop';

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

  const btnClass = ['button'];
  if (page === currentPage) {
    btnClass.push('is-selected');
  }

  return (
    <button
      className={btnClass.join(' ')}
      onClick={() => onPaginate(page)}
      title={tooltip}
      type="button"
    >
      <span>
        { dotted ? '' : (page + 1) }
      </span>
    </button>
  );
};

Step.propTypes = {
  step: React.PropTypes.array.isRequired,
  currentPage: React.PropTypes.number.isRequired,
  page: React.PropTypes.number.isRequired,
  get: React.PropTypes.func,
  onPaginate: React.PropTypes.func.isRequired,
  dotted: React.PropTypes.bool.isRequired,
};

const Pagination = ({
  paginatedLists,
  currentPage,
  get,
  onPaginate,
  dotted
}) => {
  if (paginatedLists.length < 2) {
    return null;
  }

  const paginationClass = [];

  dotted
    ? paginationClass.push('react-redux-composable-list-row-pagination-dot-container')
    : paginationClass.push('react-redux-composable-list-row-pagination-button-container');

  return (
    <div className={paginationClass.join(' ')}>
      {paginatedLists.map((step, key) => {
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

Pagination.propTypes = {
  paginatedLists: React.PropTypes.array.isRequired,
  currentPage: React.PropTypes.number.isRequired,
  get: React.PropTypes.func,
  onPaginate: React.PropTypes.func.isRequired,
  dotted: React.PropTypes.bool.isRequired,
};

export default Pagination;
