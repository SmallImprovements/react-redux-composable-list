const partition = (array, fn) => {
  let predictedArray = [];
  let restArray = [];
  array.forEach(v => {
    if (fn(v)) {
      predictedArray.push(v);
    } else {
      restArray.push(v);
    }
  });
  return [ predictedArray, restArray ];
};

export {
  partition
};
