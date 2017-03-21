import React from 'react';

const withPreselectables = ({
  ids = [],
}) => (DataGrid) => (props) =>
  <DataGrid preselected={ids} { ...props } />;

export default withPreselectables;
