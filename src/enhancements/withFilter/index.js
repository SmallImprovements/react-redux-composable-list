import React from 'react';
import { connect } from 'react-redux';

import { filter } from '../../helper/util/filter';
import { every } from '../../helper/util/every';

import { selectors } from '../../ducks';

const filterList = (fns) => {
  const filterFn = (item) => every(fns, (fn) => fn(item));
  return (list) => fns.length ? filter(list, filterFn) : list;
};

const withFilter = (
/*eslint-disable no-unused-vars*/
  configuration = {},
/*eslint-enable no-unused-vars*/
) => (Enhanced) => {
  const WithFilter = (props) => <Enhanced { ...props } />;

  const mapStateToProps = (state, { list, stateKey }) => {
    const filterFns = selectors.getFilters(state, stateKey);
    return {
      list: filterList(filterFns)(list),
    };
  };

  return connect(mapStateToProps)(WithFilter);
};

export default withFilter;
