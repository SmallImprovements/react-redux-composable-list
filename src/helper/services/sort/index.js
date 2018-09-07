export function getAriaSort(isActive, isReverse) {
  if (!isActive) {
    return 'none';
  }
  return isReverse ? 'descending' : 'ascending';
}
