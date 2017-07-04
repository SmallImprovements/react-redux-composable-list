import React, { Component, PropTypes } from 'react';

const withPreselectables = ({
  ids = [],
}) => (Enhanced) => {
  class WithPreselectables extends Component {
    getChildContext() {
      return {
        preselected: ids,
      };
    }

    render() {
      return <Enhanced preselected={ids} { ...this.props } />;
    }
  }

  WithPreselectables.childContextTypes = {
    preselected: PropTypes.array,
  };

  return WithPreselectables;
};

export default withPreselectables;
