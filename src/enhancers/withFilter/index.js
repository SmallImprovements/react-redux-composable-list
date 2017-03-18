import React from 'react';
import { connect } from 'react-redux';
import { every, map, filter } from 'lodash';

import { selectors } from '../../ducks';

const filterList = (fns) => {
  const filterFn = (item) => every(map(fns, 'fn'), (fn) => fn(item));
  return (list) => fns ? filter(list, filterFn) : list;
};

const withFilter = (DataGrid) => {
  const WithFilter = (props) => <DataGrid { ...props } />;

  const mapStateToProps = (state, { list, stateKey }) => {
      const filterFns = selectors.getFilters(state, stateKey);
      return {
          list: filterList(filterFns)(list),
      };
  };

  return connect(mapStateToProps)(WithFilter);
};

export default withFilter;
