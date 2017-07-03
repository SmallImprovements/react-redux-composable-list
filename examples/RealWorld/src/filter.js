import React from 'react';
import { connect } from 'react-redux';

import { actionCreators } from 'react-redux-composable-list';

const InputField = ({ onChange }) =>
  <div style={{ textAlign: 'center', padding: '40px' }}>
    <strong>Filter:</strong> <input
      style={{ padding: '10px' }}
      type="text"
      onChange={e => onChange(e.target.value)}
    />
  </div>

const getStringFilterFn = query => item =>
  item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
  item.comment.toLowerCase().indexOf(query.toLowerCase()) !== -1;

const mapDispatchToPropsStringFilter = (dispatch, props) => ({
  onChange: (query) => query !== ''
    ? dispatch(actionCreators.doSetFilter(props.stateKey, 'SOME_FILTER', getStringFilterFn(query)))
    : dispatch(actionCreators.doRemoveFilter(props.stateKey, 'SOME_FILTER'))
});

export default connect(null, mapDispatchToPropsStringFilter)(InputField);
