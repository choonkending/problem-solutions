/*
 * Flatten array
 */
const testOne = [1, 2, 3, 4];
const testTwo = [1, 2, [3, 4], 5];
const testThree = [1, [2, [3], 4]];

const flattenArray = array => array.reduce((acc, cur) => {
  if (Array.isArray(cur)) {
    return acc.concat(flattenArray(cur));
  }
  return acc.concat(cur);
}, []);



