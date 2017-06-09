import React from 'react';
import { compose } from 'recompose';

import { components, enhancements } from 'react-redux-composeable-list';
const { Enhanced, Row, Cell, HeaderCell, Sort, SortSelected, CellSelected } = components;
const { withSelectables, withUnselectables, withPreselectables, withSort } = enhancements;

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

const SORTS_ASC_DESC = {
  ASC: <span>(asc)</span>,
  DESC: <span>(desc)</span>,
};

const titleSort = item => item.title;
const commentSort = item => item.comment;

const SelectSortEnhanced = ({ list, isSelectable, unselectables, preselected, stateKey }) =>
  <Enhanced stateKey={stateKey} isSelectable={isSelectable} unselectables={unselectables} preselected={preselected}>
    <Row>
      <HeaderCell style={WIDTHS.MEDIUM}>
        <Sort
          sortKey={'title'}
          sortFn={titleSort}>
          Title
        </Sort>
      </HeaderCell>
      <HeaderCell style={WIDTHS.SMALL}>
        <Sort
          sortKey={'comment'}
          sortFn={commentSort}>
          Comment
        </Sort>
      </HeaderCell>
      <HeaderCell style={WIDTHS.SMALL}>
        <SortSelected
          sortKey={'selected'}
          suffix={SORTS_ASC_DESC}>
          Selected
        </SortSelected>
      </HeaderCell>
    </Row>
    {list.map(item =>
      <Row key={item.id} id={item.id}>
        <Cell style={WIDTHS.MEDIUM}>{item.title}</Cell>
        <Cell style={WIDTHS.SMALL}>{item.comment}</Cell>
        <Cell style={WIDTHS.SMALL}>
          <CellSelected id={item.id}>
            {{
              SELECTED: <span>SELECTED</span>,
              NOT_SELECTED: <span>NOT_SELECTED</span>,
              PRE_SELECTED: <span>PRE_SELECTED</span>,
              UNSELECTABLE: <span>UNSELECTABLE</span>,
            }}
          </CellSelected>
        </Cell>
      </Row>
    )}
  </Enhanced>

const Foo = ({ state }) => {
  <span>{SELECT_STATES[state]}</span>
};

export default compose(
  withSelectables({ ids: [] }),
  withPreselectables({ ids: [5] }),
  withUnselectables({ ids: [1, 2] }),
  withSort()
)(SelectSortEnhanced);
