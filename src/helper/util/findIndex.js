const findIndex = (a, fn) => {
  let v;
  a.forEach((o, i) => {
    if (fn(o)) {
      v = i;
    }
  });
  return v;
};

export {
  findIndex
};
