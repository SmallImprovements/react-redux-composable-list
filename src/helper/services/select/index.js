export const SELECT_STATES = {
  selected: 'SELECTED',
  notSelected: 'NOT_SELECTED',
  preSelected: 'PRE_SELECTED',
  unselectable: 'UNSELECTABLE',
};

export function getSelectState(id, isSelected, preselected, unselectables) {
  const { selected, notSelected, preSelected, unselectable } = SELECT_STATES;
  if (preselected.indexOf(id) !== -1) { return preSelected; }
  if (unselectables.indexOf(id) !== -1) { return unselectable; }
  return isSelected ? selected : notSelected;
}
