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

