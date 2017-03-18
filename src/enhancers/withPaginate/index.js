import React from 'react';
import { connect } from 'react-redux';
import { reduce } from 'lodash';

import { selectors } from '../../ducks';
import { Pagination } from '../../components';

const DEFAULT_PAGINATION_SIZE = 15;

const paginateList = (list, size) =>
  reduce(list, (memo, item, i) => {
    if (i % size) {
      memo[memo.length - 1].push(item);
    } else {
      memo[memo.length] = [item];
    }
    return memo;
  }, []);

const withPaginate = ({ size = DEFAULT_PAGINATION_SIZE }) => (DataGrid) => {
  const WithPaginate = (props) =>
    <div>
      <Pagination
        stateKey={props.stateKey}
        paginatedLists={props.paginatedLists}
        currentPage={props.currentPage}
        dotted={true}
      />
        <DataGrid { ...props } />
      <Pagination
        stateKey={props.stateKey}
        paginatedLists={props.paginatedLists}
        currentPage={props.currentPage}
        dotted={false}
      />
    </div>;

  const mapStateToProps = (state, { list, stateKey }) => {
    const paginatedLists = paginateList(list, size);
    const currentPage = selectors.getCurrentPage(state, stateKey, paginatedLists);
    const paginatedList = paginatedLists[currentPage];
    return {
      paginatedLists,
      list: paginatedList,
      currentPage,
    };
  };

  return connect(mapStateToProps)(WithPaginate);
};

export default withPaginate;
