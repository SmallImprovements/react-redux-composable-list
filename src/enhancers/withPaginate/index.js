import React from 'react';
import { connect } from 'react-redux';
import { reduce } from 'lodash';

import { selectors } from '../../ducks';
import { Pagination } from '../../components';

const paginateList = (list, paginationSize) =>
  reduce(list, (memo, item, i) => {
    if (i % paginationSize) {
      memo[memo.length - 1].push(item);
    } else {
      memo[memo.length] = [item];
    }
    return memo;
  }, []);

const withPaginate = (DataGrid) => {
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

  const mapStateToProps = (state, { list, stateKey, paginationSize = 15 }) => {
    const paginatedLists = paginateList(list, paginationSize);
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
