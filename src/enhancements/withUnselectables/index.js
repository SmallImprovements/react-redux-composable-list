import React, { Component, PropTypes } from 'react';

const withUnselectables = ({
  ids = [],
}) => (Enhanced) => {
  class WithUnselectables extends Component {
    getChildContext() {
      return {
        unselectables: ids,
      };
    }

    render() {
      return <Enhanced unselectables={ids} { ...this.props } />;
    }
  }

  WithUnselectables.childContextTypes = {
    unselectables: PropTypes.array,
  };

  return WithUnselectables;
};

export default withUnselectables;
