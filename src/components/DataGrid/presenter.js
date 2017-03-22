import React, { Component, PropTypes } from 'react';
import '../style.less';

class DataGrid extends Component {
  getChildContext() {
    const {
      stateKey,
      isSelectable,
      preselected,
      unselectables
    } = this.props;

    return {
      stateKey,
      isSelectable,
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
        className={className || 'react-redux-data-grid'}
        style={style}
      >
        {children}
      </div>
    );
  }
}

DataGrid.defaultProps = {
  isSelectable: false,
  preselected: [],
  unselectables: [],
  className: '',
};

DataGrid.propTypes = {
  stateKey: PropTypes.string.isRequired,
  isSelectable: PropTypes.bool,
  preselected: PropTypes.array,
  unselectables: PropTypes.array,
  style: React.PropTypes.object,
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

DataGrid.childContextTypes = {
  stateKey: PropTypes.string,
  isSelectable: PropTypes.bool,
  preselected: PropTypes.array,
  unselectables: PropTypes.array,
};

export default DataGrid;
