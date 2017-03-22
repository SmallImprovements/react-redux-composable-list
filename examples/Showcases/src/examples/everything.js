import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { components, enhancements, actionCreators } from 'react-redux-data-grid';

const {
  DataGrid,
  Row,
  Cell,
  HeaderCell,
  Sort,
  SortSelected,
  CellSelected,
  CellMagicHeader,
  CellMagic,
} = components;

const {
  withSelectables,
  withUnselectables,
  withPreselectables,
  withSort,
  withFilter,
  withPaginate,
  withEmpty,
} = enhancements;

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

const titleSort = item => item.title;
const commentSort = item => item.comment;
const votesSort = item => item.votes;
const likesSort = item => item.likes;

const magicSorts = [
  {
    label: 'Comment',
    sortKey: 'comment',
    sortFn: commentSort,
    resolve: (item) => item.comment,
  },
  {
    label: 'Votes',
    sortKey: 'votes',
    sortFn: votesSort,
    resolve: (item) => item.votes,
  },
  {
    label: 'Likes',
    sortKey: 'likes',
    sortFn: likesSort,
    resolve: (item) => item.likes,
  },
];

const SelectSortDataGrid = ({
  list,
  isSelectable,
  unselectables,
  preselected,
  stateKey
}) =>
  <DataGrid
    stateKey={stateKey}
    isSelectable={isSelectable}
    unselectables={unselectables}
    preselected={preselected}>
    <Row>
      <HeaderCell style={WIDTHS.MEDIUM}>
        <Sort
          sortKey={'title'}
          sortFn={titleSort}>
          Title
        </Sort>
      </HeaderCell>
      <HeaderCell style={WIDTHS.SMALL}>
        <CellMagicHeader
          magicSorts={magicSorts}>
          (FONT AWESOME MGC)
        </CellMagicHeader>
      </HeaderCell>
      <HeaderCell style={WIDTHS.SMALL}>
        <SortSelected
          sortKey={'selected'}>
          Selected
        </SortSelected>
      </HeaderCell>
    </Row>
    {list.map(item =>
      <Row key={item.id} id={item.id}>
        <Cell style={WIDTHS.MEDIUM}>{item.title}</Cell>
        <Cell style={WIDTHS.SMALL}>
          <CellMagic item={item} magicSorts={magicSorts} />
        </Cell>
        <Cell style={WIDTHS.SMALL}>
          <CellSelected id={item.id}>
            {{
              SELECTED: <span>FONTAWESONE SELECTED</span>,
              NOT_SELECTED: <span>FONTAWESONE NOT_SELECTED</span>,
              PRE_SELECTED: <span>FONTAWESONE PRE_SELECTED</span>,
              UNSELECTABLE: <span>FONTAWESONE UNSELECTABLE</span>,
            }}
          </CellSelected>
        </Cell>
      </Row>
    )}
  </DataGrid>

// Empty Components, if filter result or in general list is empty or null

const EmptyBecauseFilter = () =>
  <div style={{ textAlign: 'center', padding: '40px' }}>
    <h3>No Filter Result</h3>
    <p>Sorry, there was no item matching your filter.</p>
  </div>

const EmptyBecauseNoList = () =>
  <div style={{ textAlign: 'center', padding: '40px' }}>
    <h3>Nothing to see!</h3>
    <p>Sorry, there is no content.</p>
  </div>

// External Filter Component that consumes the action API of the library

const InputField = ({ onChange }) =>
  <div style={{ textAlign: 'center', paddingBottom: '20px' }}>
    Filter Title or Comment: <input
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

const Filter = connect(null, mapDispatchToPropsStringFilter)(InputField);

export {
  Filter,
};

export default compose(
  withEmpty({ component: EmptyBecauseNoList }),
  withSelectables({ ids: [0] }),
  withPreselectables({ ids: [2, 3] }),
  withUnselectables({ ids: [4, 6] }),
  withFilter(),
  withEmpty({ component: EmptyBecauseFilter }),
  withSort(),
  withPaginate({ size: 10 }),
)(SelectSortDataGrid);
