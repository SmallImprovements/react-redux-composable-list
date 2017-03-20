import React from 'react';

const withPreselectables = (preselected) => (DataGrid) => (props) =>
  <DataGrid preselected={preselected} { ...props } />;

export default withPreselectables;
