/*
 * Flatten array
 */
const testOne = [1, 2, 3, 4];
const testTwo = [1, 2, [3, 4], 5];
const testThree = [1, [2, [3], 4]];

/*
 * Flattening with reduce
 */
const flattenWithReduce = array => array.reduce((acc, cur) => Array.isArray(cur) ? acc.concat(flattenWithReduce(cur)) : acc.concat(cur), []);

/*
 * Flatten with map
 */
const flattenWithMap = array => [].concat.apply([], array.map(item => Array.isArray(item) ? flattenWithMap(item) : item));

const flattenWithSplice = array => {
  let i = 0;
  while (i < array.length) {
    if (Array.isArray(array[i])) {
      array.splice.apply(array, [i, 1].concat(array[i]));
    }
    i++;
  }
  return array;
};

