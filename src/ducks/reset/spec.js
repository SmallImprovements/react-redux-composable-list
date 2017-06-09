import deepFreeze from 'deep-freeze';
import { applyResetByStateKeys } from '../reset';

const STATE_KEY = 'SOME_KEY';
const OTHER_STATE_KEY = 'SOME_OTHER_KEY';
const ANOTHER_STATE_KEY = 'SOME_ANOTHER_KEY';

describe('reset', () => {
  describe('RESET_BY_STATE_KEYS', () => {
    it('resets everything by state key', () => {

      const previousState = {
        [STATE_KEY]: {
          foo: 'foo',
          bar: 'bar',
        },
        [OTHER_STATE_KEY]: {
          zoo: 'zoo',
        },
        [ANOTHER_STATE_KEY]: {
          tyi: 'tyi',
        },
      };
      const expectedState = {
        [STATE_KEY]: undefined,
        [OTHER_STATE_KEY]: {
          zoo: 'zoo',
        },
        [ANOTHER_STATE_KEY]: undefined,
      };
      const action = {
        payload: [ STATE_KEY, ANOTHER_STATE_KEY ],
      };

      deepFreeze(previousState);
      expect(applyResetByStateKeys(previousState, action)).to.eql(expectedState);
    });
  });
});
