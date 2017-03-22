import React, { Component } from 'react';
import { findIndex } from 'lodash';

const withRemove = (
/*eslint-disable no-unused-vars*/
  configuration = {},
/*eslint-enable no-unused-vars*/
) => (DataGrid) => {
  return class WithRemove extends Component {
    constructor(props) {
      super(props);

      this.state = {
        list: props.list,
      };

      this.onRemoveItem = this.onRemoveItem.bind(this);
    }

    onRemoveItem(id) {
      const { list } = this.state;
      const index = findIndex(list, (item) => item.id === id);
      this.setState({
        ...this.state,
        list: [
          ...list.slice(0, index),
          ...list.slice(index + 1)
        ]
      });
    }

    render() {
      return (
        <DataGrid
          { ...this.props }
          list={this.state.list}
          onRemoveItem={this.onRemoveItem}
        />
      );
    }
  };
};

export default withRemove;
