const every = (array, fn) => {
  let every = true;
  array.forEach(v => {
    if (!fn(v)) {
      every = false;
    }
  });
  return every;
};

export {
  every
};
