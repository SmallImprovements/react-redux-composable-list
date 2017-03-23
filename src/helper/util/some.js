const some = (array, fn) => {
  let some = false;
  array.forEach(v => {
    if (fn(v)) {
      some = true;
    }
  });
  return some;
};

export {
  some
};
