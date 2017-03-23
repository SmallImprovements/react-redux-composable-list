export const RESET_BY_STATE_KEYS = 'RESET_BY_STATE_KEYS';

export function applyResetByStateKeys(state, { payload }) {
  const toReset = Object.keys(payload).reduce(payload, (mem, key) => {
    mem[payload[key]] = undefined;
    return mem;
}, {});
  return { ...state, ...toReset };
}
