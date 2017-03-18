import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../../ducks';

const withPreselected = (preselected) => (DataGrid) => {
  class WithPreselected extends Component {
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

  return connect(() => ({}), mapDispatchToProps)(WithPreselected);
};

export default withPreselected;
