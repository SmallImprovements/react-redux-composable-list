import React from 'react';

const withEmpty = (Empty) => (DataGrid) => (props) =>
  (props.list !== null && props.list.length)
    ? <DataGrid { ...props } />
    : <Empty />;

export default withEmpty;
