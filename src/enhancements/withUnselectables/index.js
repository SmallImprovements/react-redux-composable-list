import PropTypes from 'prop-types';
import React, { Component } from 'react';

const withUnselectables = (configuration = {}) => (Enhanced) => {
  class WithUnselectables extends Component {
    getChildContext() {
      return {
        unselectables: configuration.ids || [],
      };
    }

    render() {
      return <Enhanced unselectables={configuration.ids || []} { ...this.props } />;
    }
  }

  WithUnselectables.childContextTypes = {
    unselectables: PropTypes.array,
  };

  return WithUnselectables;
};

export default withUnselectables;
