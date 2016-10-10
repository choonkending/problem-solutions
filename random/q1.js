/*
 * We have an array of objects A and an array of indexes B. Reorder objects in
 * array A with given indexes in array B. Do not change array A's length.
 *
 * var A = ['C', 'D', 'E', 'F', 'G'];
 * var B = [3, 0, 4, 1, 2];
 *
 * sort(A, B);
 *
 * A is now [D, F, G, C, E];
 */

var A = ['C', 'D', 'E', 'F', 'G'];
var B = [3, 0, 4, 1, 2];

function sort(array, indices) {
  // Loop through A
  // for each (v, i) => place A in a new array with B[i]
  const temp = [];
  array.forEach((v, i) => {
    temp[B[i]] = v;
  });

  array.splice(0, array.length, ...temp);
  // array.splice(array, [0, array.length].concat(temp));
}



