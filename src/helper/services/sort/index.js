export function getAriaSort(isActive, isReverse) {
  if (!isActive) {
    return 'none';
  }
  return isReverse ? 'descending' : 'ascending';
}

export const callIfActionKey = callbackFn => event => {
  const isActionKey = event && ['Enter', ' '].indexOf(event.key) !== -1;
  return isActionKey ? callbackFn(event) : null;
};
