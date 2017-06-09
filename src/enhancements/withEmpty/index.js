import React from 'react';

const withEmpty = (
  configuration
) => (Enhanced) => (props) =>
  (props.list !== null && props.list.length)
    ? <Enhanced { ...props } />
    : <configuration.component />;

export default withEmpty;
