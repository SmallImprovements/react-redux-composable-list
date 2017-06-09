import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { components, enhancements, actionCreators } from 'react-redux-composeable-list';
const { Enhanced, Row, Cell, HeaderCell } = components;
const { withFilter } = enhancements;

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

const ExternalFilters = ({ onTitleFilterChange, onCommentFilterChange }) =>
  <div style={{ textAlign: 'center', paddingBottom: '20px' }}>
    <h3>Filters</h3>
    <div>
      Title: <input
        type="text"
        onChange={e => onTitleFilterChange(e.target.value)}
      />
    </div>
    <div>
      Comment: <input
        type="text"
        onChange={e => onCommentFilterChange(e.target.value)}
      />
    </div>
  </div>

const titleFilterFn = query => item =>
  item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;

const commentFilterFn = query => item =>
  item.comment.toLowerCase().indexOf(query.toLowerCase()) !== -1;

const mapDispatchToProps = (dispatch, props) => ({
  onTitleFilterChange: (query) => query !== ''
    ? dispatch(actionCreators.doSetFilter(props.stateKey, 'TITLE_FILTER', titleFilterFn(query)))
    : dispatch(actionCreators.doRemoveFilter(props.stateKey, 'TITLE_FILTER')),

  onCommentFilterChange: (query) => query !== ''
    ? dispatch(actionCreators.doSetFilter(props.stateKey, 'COMMENT_FILTER', commentFilterFn(query)))
    : dispatch(actionCreators.doRemoveFilter(props.stateKey, 'COMMENT_FILTER'))
});

const Filters = connect(null, mapDispatchToProps)(ExternalFilters);

export {
  Filters,
};

export default compose(
  withFilter()
)(FilterEnhanced);
