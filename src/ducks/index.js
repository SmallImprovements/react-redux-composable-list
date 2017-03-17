import * as sortDuck from './sort';
import * as filterDuck from './filter';
import * as selectDuck from './select';
import * as magicDuck from './magic';
import * as paginateDuck from './paginate';

const reducers = {
  ...sortDuck.reducers,
  ...filterDuck.reducers,
  ...selectDuck.reducers,
  ...magicDuck.reducers,
  ...paginateDuck.reducers,
};

const actionCreators = {
  ...sortDuck.actionCreators,
  ...filterDuck.actionCreators,
  ...selectDuck.actionCreators,
  ...magicDuck.actionCreators,
  ...paginateDuck.actionCreators,
};

const selectors = {
  ...sortDuck.selectors,
  ...filterDuck.selectors,
  ...selectDuck.selectors,
  ...magicDuck.selectors,
  ...paginateDuck.selectors,
};

export {
  reducers,
  actionCreators,
  selectors,
};
