import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../ducks';
import Pagination from './presenter';

const mapDispatchToProps = (dispatch, { stateKey }) => ({
  onPaginate: bindActionCreators((page) => actionCreators.doSetPage(stateKey, page), dispatch),
});

export default connect(null, mapDispatchToProps)(Pagination);
