import React from 'react';

const withUnselectables = ({
  ids = [],
}) => (Enhanced) => (props) =>
  <Enhanced unselectables={ids} { ...props } />;

export default withUnselectables;
