import PropTypes from 'prop-types';
import React, { Component } from 'react';

const withPreselectables = (configuration = {}) => (Enhanced) => {
  class WithPreselectables extends Component {
    getChildContext() {
      return {
        preselected: configuration.ids || [],
      };
    }

    render() {
      return <Enhanced preselected={configuration.ids || []} { ...this.props } />;
    }
  }

  WithPreselectables.childContextTypes = {
    preselected: PropTypes.array,
  };

  return WithPreselectables;
};

export default withPreselectables;
