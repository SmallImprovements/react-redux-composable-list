import React from 'react';
import { connect } from 'react-redux';

import { filter } from '../../helper/util/filter';
import { some } from '../../helper/util/some';

import { selectors } from '../../ducks';

const filterList = (fns) => {
  const filterFn = (item) => some(fns, (fn) => fn(item));
  return (list) => fns.length ? filter(list, filterFn) : list;
};

const withFilterOr = (
/*eslint-disable no-unused-vars*/
  configuration = {},
/*eslint-enable no-unused-vars*/
) => (DataGrid) => {
  const WithFilterOr = (props) => <DataGrid { ...props } />;

  const mapStateToProps = (state, { list, stateKey }) => {
    const filterFns = selectors.getFilters(state, stateKey);
    return {
      list: filterList(filterFns)(list),
    };
  };

  return connect(mapStateToProps)(WithFilterOr);
};

export default withFilterOr;
