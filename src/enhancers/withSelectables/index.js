import React from 'react';

const withSelectables = (DataGrid) => (props) =>
  <DataGrid isSelectable={true} { ...props } />;

export default withSelectables;
