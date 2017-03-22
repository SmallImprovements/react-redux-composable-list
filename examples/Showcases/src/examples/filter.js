import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { components, enhancements, actionCreators } from 'react-redux-data-grid';
const { DataGrid, Row, Cell, HeaderCell } = components;
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

const FilterDataGrid = ({ list, stateKey }) =>
  <DataGrid stateKey={stateKey}>
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
  </DataGrid>

// External Filter Component that consumes the action API of the library

const ExternalFilter = ({ onChange }) =>
  <div style={{ textAlign: 'center', paddingBottom: '20px' }}>
    Filter Title: <input
      type="text"
      onChange={e => onChange(e.target.value)}
    />
  </div>

const titleFilterFn = query => item =>
  item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;

const mapDispatchToProps = (dispatch, props) => ({
  onChange: (query) => query !== ''
    ? dispatch(actionCreators.doSetFilter(props.stateKey, 'TITLE_FILTER', titleFilterFn(query)))
    : dispatch(actionCreators.doRemoveFilter(props.stateKey, 'TITLE_FILTER'))
});

const Filter = connect(null, mapDispatchToProps)(ExternalFilter);

export {
  Filter,
};

export default compose(
  withFilter()
)(FilterDataGrid);
