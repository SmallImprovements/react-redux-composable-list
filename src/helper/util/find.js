const find = (a, fn) => {
  let v;
  a.forEach(i => {
    if (fn(i)) {
      v = i;
    }
  });
  return v;
};

export {
  find
};
