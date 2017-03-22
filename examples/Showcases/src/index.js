import React, { Component, createElement } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { map } from 'lodash';
import generateList from './data';

import configureStore from './store';

import PlainDataGrid from './examples/plain';
import SortDataGrid from './examples/sort';
import SelectPlainDataGrid from './examples/select-plain';
import SelectSelectedDataGrid from './examples/select-selected';
import SelectUnselectablesDataGrid from './examples/select-unselectables';
import SelectPreselectablesDataGrid from './examples/select-preselectables';
import SelectSortDataGrid from './examples/select-sort';
import MagicColumnDataGrid from './examples/magic-column';
import FilterDataGrid, { Filter as TitleFilter } from './examples/filter';
import FilterMultipleDataGrid, { Filters as TitleCommentAndFilter } from './examples/multiple-filter';
import FilterMultipleOrDataGrid, { Filters as TitleCommentOrFilter } from './examples/multiple-filter-or';
import InfiniteDataGrid from './examples/infinite';
import PaginationDataGrid from './examples/pagination';
import EverythingDataGrid, { Filter } from './examples/everything';

const store = configureStore();

// Each example will get resolved upon user request - see Showcase Component
// id: identifier for the component in Redux, used as stateKey in the component
// label: button label to select the example
// Component: the Component that uses the library, each component is defined in its own file
// ExternalApiConsumerComponent: optional component that uses the library API to update the list from outside
const SHOWCASE_EXAMPLES = {
  PLAIN: {
    id: 'PLAIN',
    label: 'Plain',
    Component: PlainDataGrid,
  },
  SORT: {
    id: 'SORT',
    label: 'With Sort',
    Component: SortDataGrid,
  },
  SELECT_PLAIN: {
    id: 'SELECT_PLAIN',
    label: 'With Select',
    Component: SelectPlainDataGrid,
  },
  SELECT_SELECTED: {
    id: 'SELECT_SELECTED',
    label: 'With Select With Selected',
    Component: SelectSelectedDataGrid,
  },
  SELECT_UNSELECTABLES: {
    id: 'SELECT_UNSELECTABLES',
    label: 'With Select With Unselectables',
    Component: SelectUnselectablesDataGrid,
  },
  SELECT_PRESELECTED: {
    id: 'SELECT_PRESELECTED',
    label: 'With Select With Preselectables',
    Component: SelectPreselectablesDataGrid,
  },
  SELECT_SORT: {
    id: 'SELECT_SORT',
    label: 'With Select With Sort',
    Component: SelectSortDataGrid,
  },
  MAGIC: {
    id: 'MAGIC',
    label: 'With Magic Column',
    Component: MagicColumnDataGrid,
  },
  FILTER: {
    id: 'FILTER',
    label: 'With Filter',
    Component: FilterDataGrid,
    ExternalApiConsumerComponent: TitleFilter,
  },
  FILTER_MULTIPLE: {
    id: 'FILTER_MULTIPLE',
    label: 'With Multiple Filters AND',
    Component: FilterMultipleDataGrid,
    ExternalApiConsumerComponent: TitleCommentAndFilter,
  },
  FILTER_MULTIPLE_OR: {
    id: 'FILTER_MULTIPLE_OR',
    label: 'With Multiple Filters OR',
    Component: FilterMultipleOrDataGrid,
    ExternalApiConsumerComponent: TitleCommentOrFilter,
  },
  INFINITE: {
    id: 'INFINITE',
    label: 'With Infinite Scroll',
    Component: InfiniteDataGrid,
  },
  PAGINATION: {
    id: 'PAGINATION',
    label: 'With Pagination',
    Component: PaginationDataGrid,
  },
  EVERYTHING: {
    id: 'EVERYTHING',
    label: 'Everything at Once',
    Component: EverythingDataGrid,
    ExternalApiConsumerComponent: Filter,
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      example: SHOWCASE_EXAMPLES.PLAIN.id,
    }
  }

  render() {
    const example = SHOWCASE_EXAMPLES[this.state.example];

    return (
      <div>
        <ShowcaseSelector onSelectShowcase={(id) => this.setState({ example: id })} />

        <hr/>

        <div style={{ margin: '20px' }}>
          <h2 style={{ textAlign: 'center' }}>
            {example.label}
          </h2>

          <Showcase example={example} />
        </div>
      </div>
    );
  }
}

const list = generateList(100);

// example.Component equals one of the Example components e.g. PlainDataGrid
// input: list of items as list
// input: unique identifier as stateKey
// external API consumer component needs the stateKey to speak to the library API
const Showcase = ({ example }) =>
  <div>
    { example.ExternalApiConsumerComponent
        ? <example.ExternalApiConsumerComponent stateKey={example.id} />
        : null
    }

    <example.Component
      list={list}
      stateKey={example.id}
    />
  </div>;

const ShowcaseSelector = ({ onSelectShowcase }) =>
  <div style={{ margin: '20px', textAlign: 'center' }}>
    <h1>Showcase React Redux Data Grids</h1>
    {map(SHOWCASE_EXAMPLES, x =>
      <div key={x.id}>
        <button
          type="button"
          onClick={() => onSelectShowcase(x.id)}
        >
          {x.label}
        </button>
      </div>
    )}
  </div>;

// needs store on top level
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
