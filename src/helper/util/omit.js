const omit = (object, key) => {
  const { [key]: toOmit, ...rest } = object;
  return rest;
};

export {
  omit
};
