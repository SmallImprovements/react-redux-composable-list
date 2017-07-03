import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { components, enhancements, actionCreators } from 'react-redux-composable-list';
const { Enhanced, Row, Cell, HeaderCell } = components;
const { withFilterOr } = enhancements;

const WIDTHS = {
  SMALL: {
    width: '25%',
  },
  MEDIUM: {
    width: '50%',
  },
  LARGE: {
    width: '75%',
  },
};

const FilterEnhanced = ({ list, stateKey }) =>
  <Enhanced stateKey={stateKey}>
    <Row>
      <HeaderCell style={WIDTHS.MEDIUM}>
        Title
      </HeaderCell>
      <HeaderCell style={WIDTHS.MEDIUM}>
        Comment
      </HeaderCell>
    </Row>
    {list.map(item =>
      <Row key={item.id}>
        <Cell style={WIDTHS.MEDIUM}>{item.title}</Cell>
        <Cell style={WIDTHS.MEDIUM}>{item.comment}</Cell>
      </Row>
    )}
  </Enhanced>

// External Filter Component that consumes the action API of the library

const ExternalFilters = ({ onFilterChange }) =>
  <div style={{ textAlign: 'center', paddingBottom: '20px' }}>
    Filter Title or Comment: <input
      type="text"
      onChange={e => onFilterChange(e.target.value)}
    />
  </div>

const titleOrCommentFilterFn = query => item =>
  item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
  item.comment.toLowerCase().indexOf(query.toLowerCase()) !== -1;

const mapDispatchToProps = (dispatch, props) => ({
  onFilterChange: (query) => query !== ''
    ? dispatch(actionCreators.doSetFilter(props.stateKey, 'TITLE_COMMENT_FILTER', titleOrCommentFilterFn(query)))
    : dispatch(actionCreators.doRemoveFilter(props.stateKey, 'TITLE_COMMENT_FILTER'))
});

const Filters = connect(null, mapDispatchToProps)(ExternalFilters);

export {
  Filters,
};

export default compose(
  withFilterOr()
)(FilterEnhanced);
