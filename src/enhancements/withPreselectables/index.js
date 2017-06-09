import React from 'react';

const withPreselectables = ({
  ids = [],
}) => (Enhanced) => (props) =>
  <Enhanced preselected={ids} { ...props } />;

export default withPreselectables;
