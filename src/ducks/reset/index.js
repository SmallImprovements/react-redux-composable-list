import { reduce } from 'lodash';

export const RESET_BY_STATE_KEYS = 'RESET_BY_STATE_KEYS';

export function applyResetByStateKeys(state, { payload }) {
  const toReset = reduce(payload, (mem, key) => {
    mem[key] = undefined;
    return mem;
}, {});
  return { ...state, ...toReset };
}
