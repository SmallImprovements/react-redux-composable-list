import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../../ducks';

const withPreselectables = (preselected) => (DataGrid) => {
  class WithPreselectables extends Component {
    componentDidMount() {
      const { onSelectItems } = this.props;
      onSelectItems(preselected);
    }

    render() {
      return <DataGrid { ...this.props } />;
    }
  };

  const mapDispatchToProps = (dispatch, { stateKey }) => ({
    onSelectItems: bindActionCreators((ids) => actionCreators.doSelectItems(stateKey, ids, true), dispatch),
  });

  return connect(() => ({}), mapDispatchToProps)(WithPreselectables);
};

export default withPreselectables;
