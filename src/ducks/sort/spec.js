import deepFreeze from 'deep-freeze';
import { reducers, actionTypes, actionCreators, getEnhancedSortFn } from '../sort';

const STATE_KEY = 'SOME_KEY';

const SAMPLE_DATA_ONE = [
  { name: 'a' },
  { name: 'b' },
];

const SAMPLE_DATA_TWO = [
  { name: 'a' },
  { name: 'b' },
  { name: '' },
];

describe('sort', () => {
  describe('TABLE_SORT', () => {
    it('sets a sort', () => {
      const isReverse = false;
      const sortKey = 'name';
      const sortFn = item => item.name;
      const previousState = {};
      const action = actionCreators.doTableSort(STATE_KEY, sortKey, sortFn);

      deepFreeze(action);
      deepFreeze(previousState);

      const nextState = reducers.tableSort(previousState, action);
      expect(nextState[STATE_KEY].sortKey).to.eql(sortKey);
      expect(nextState[STATE_KEY].isReverse).to.eql(isReverse);
    });

    it('reverses a sort when already set', () => {
      const isReverse = false;
      const sortKey = 'name';
      const sortFn = item => item.name;
      const previousState = {};
      const action = actionCreators.doTableSort(STATE_KEY, sortKey, sortFn);

      deepFreeze(action);
      deepFreeze(previousState);

      const nextState = reducers.tableSort(previousState, action);
      const beyondNextState = reducers.tableSort(nextState, action);

      expect(beyondNextState[STATE_KEY].sortKey).to.eql(sortKey);
      expect(beyondNextState[STATE_KEY].isReverse).to.eql(!isReverse);
    });

    it('generates an enhanced sort fn', () => {
      const isReverse = false;
      const sortKey = 'name';
      const sortFn = item => item.name;
      const previousState = {};
      const action = actionCreators.doTableSort(STATE_KEY, sortKey, sortFn);

      deepFreeze(action);
      deepFreeze(previousState);

      const enhancedSortFn = getEnhancedSortFn(isReverse, sortFn);
      const nextState = reducers.tableSort(previousState, action);

      expect(enhancedSortFn(SAMPLE_DATA_ONE)).to.eql(nextState[STATE_KEY].sortFn(SAMPLE_DATA_ONE));
    });

    it('generates an enhanced sort fn that sorts reverse', () => {
      const isReverse = true;
      const sortKey = 'name';
      const sortFn = item => item.name;
      const previousState = {};
      const action = actionCreators.doTableSort(STATE_KEY, sortKey, sortFn);

      deepFreeze(action);
      deepFreeze(previousState);

      const enhancedSortFn = getEnhancedSortFn(isReverse, sortFn);
      const nextState = reducers.tableSort(previousState, action);
      const beyondNextState = reducers.tableSort(nextState, action);

      expect(enhancedSortFn(SAMPLE_DATA_ONE)).to.eql(beyondNextState[STATE_KEY].sortFn(SAMPLE_DATA_ONE));
    });

    it('generates an enhanced sort fn that has items with undefined sort property always as last item', () => {
      const isReverse = false;
      const sortFn = item => item.name;

      const enhancedSortFn = getEnhancedSortFn(isReverse, sortFn);
      const enhancedSortFnReverse = getEnhancedSortFn(!isReverse, sortFn);

      expect(enhancedSortFn(SAMPLE_DATA_TWO)[2].name).to.eql('');
      expect(enhancedSortFnReverse(SAMPLE_DATA_TWO)[2].name).to.eql('');
    });
  });
});
