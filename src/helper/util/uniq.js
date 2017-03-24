const uniq = (array) => {
  let uniqArray = [];
  array.forEach(v => {
    if (!(uniqArray.indexOf(v) !== -1)) {
      uniqArray.push(v);
    }
  });
  return uniqArray;
};

export {
  uniq
};
