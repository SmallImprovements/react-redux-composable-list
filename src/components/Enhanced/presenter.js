import React, { Component, PropTypes } from 'react';
import '../style.less';

class Enhanced extends Component {
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
        className={className || 'react-redux-composable-list'}
        style={style}
      >
        {children}
      </div>
    );
  }
}

Enhanced.defaultProps = {
  isSelectable: false,
  preselected: [],
  unselectables: [],
  className: '',
};

Enhanced.propTypes = {
  stateKey: PropTypes.string.isRequired,
  isSelectable: PropTypes.bool,
  preselected: PropTypes.array,
  unselectables: PropTypes.array,
  style: React.PropTypes.object,
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

Enhanced.childContextTypes = {
  stateKey: PropTypes.string,
  isSelectable: PropTypes.bool,
  preselected: PropTypes.array,
  unselectables: PropTypes.array,
};

export default Enhanced;
