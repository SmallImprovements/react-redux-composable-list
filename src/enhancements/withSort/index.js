import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { isEmpty } from '../../helper/util/empty';
import { selectors, actionCreators } from '../../ducks';

const sortList = (fn) => (list) => fn ? fn(list) : list;

const withSort = (configuration = {}) => (Enhanced) => {
  class WithSort extends Component {
    componentDidMount() {
      const { sort, onTableSort } = this.props;
      if (configuration.sortKey && configuration.sortFn && isEmpty(sort)) {
        onTableSort(configuration.sortKey, configuration.sortFn);
      }
    }

    render() {
      const { sort, onTableSort, ...props } = this.props;
      return <Enhanced { ...props } />;
    }
  }

  const mapStateToProps = (state, { list, stateKey }) => {
    const sort = selectors.getSort(state, stateKey);
    return {
      list: sortList(sort.sortFn)(list),
      sort,
    };
  };

  const mapDispatchToProps = (dispatch, { stateKey }) => ({
    onTableSort: bindActionCreators((sortKey, sortFn) =>
      actionCreators.doTableSort(stateKey, sortKey, sortFn), dispatch),
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithSort);
};

export default withSort;
