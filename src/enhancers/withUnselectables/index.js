import React from 'react';

const withUnselectables = (unselectables) => (DataGrid) => (props) =>
    <DataGrid unselectables={unselectables} { ...props } />;

export default withUnselectables;
