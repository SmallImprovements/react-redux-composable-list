import React, { Component, PropTypes } from 'react';
import '../style.less';

class Enhanced extends Component {
  getChildContext() {
    const { stateKey } = this.props;

    return {
      stateKey,
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
  className: '',
};

Enhanced.propTypes = {
  stateKey: PropTypes.string.isRequired,
  style: React.PropTypes.object,
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

Enhanced.childContextTypes = {
  stateKey: PropTypes.string,
};

export default Enhanced;
