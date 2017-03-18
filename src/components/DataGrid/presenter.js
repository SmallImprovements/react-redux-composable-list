import React, { Component, PropTypes } from 'react';
import '../style.css';

class DataGrid extends Component {
  getChildContext() {
    const {
      stateKey,
      preselected,
      unselectables
    } = this.props;

    return {
      stateKey,
      preselected,
      unselectables,
    };
  }

  render() {
    const {
      style,
      className,
      children,
    } = this.props;

    return (
      <div
        className={className || 'data-grid'}
        style={style}
      >
        {children}
      </div>
    );
  }
}

DataGrid.defaultProps = {
  preselected: [],
  unselectables: [],
  className: '',
};

DataGrid.propTypes = {
  stateKey: PropTypes.string.isRequired,
  preselected: PropTypes.array,
  unselectables: PropTypes.array,
};

DataGrid.childContextTypes = {
  stateKey: PropTypes.string,
  preselected: PropTypes.array,
  unselectables: PropTypes.array,
};

export default DataGrid;
