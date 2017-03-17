import React, { Component, PropTypes } from 'react';
import * as styles from '../styles';

class Table extends Component {
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
        className={className}
        style={style || styles.table}
      >
        {children}
      </div>
    );
  }
}

Table.defaultProps = {
  preselected: [],
  unselectables: [],
  className: '',
};

Table.propTypes = {
  stateKey: PropTypes.string.isRequired,
  preselected: PropTypes.array,
  unselectables: PropTypes.array,
};

Table.childContextTypes = {
  stateKey: PropTypes.string,
  preselected: PropTypes.array,
  unselectables: PropTypes.array,
};

export default Table;
