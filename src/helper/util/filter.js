const filter = (array, fn) => {
  let filterArray = [];
  array.forEach(v => {
    if (fn(v)) {
      filterArray.push(v);
    }
  });
  return filterArray;
};

export {
  filter
};
