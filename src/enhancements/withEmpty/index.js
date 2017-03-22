import React from 'react';

const withEmpty = (
  configuration
) => (DataGrid) => (props) =>
  (props.list !== null && props.list.length)
    ? <DataGrid { ...props } />
    : <configuration.component />;

export default withEmpty;
