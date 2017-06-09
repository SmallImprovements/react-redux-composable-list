import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../../ducks';

const withSelectables = ({
  ids = [],
}) => (Enhanced) => {
  class WithSelectables extends Component {
    componentDidMount() {
      const { onSelectItems } = this.props;
      onSelectItems(ids);
    }

    render() {
      return <Enhanced isSelectable={true} { ...this.props } />;
    }
  }

  const mapDispatchToProps = (dispatch, { stateKey }) => ({
    onSelectItems: bindActionCreators((ids) => actionCreators.doSelectItems(stateKey, ids, true), dispatch),
  });

  return connect(null, mapDispatchToProps)(WithSelectables);
};

export default withSelectables;
