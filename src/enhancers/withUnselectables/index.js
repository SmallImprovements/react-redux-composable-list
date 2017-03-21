import React from 'react';

const withUnselectables = ({
  ids = [],
}) => (DataGrid) => (props) =>
  <DataGrid unselectables={ids} { ...props } />;

export default withUnselectables;
