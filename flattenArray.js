/*
 * Flatten array
 */

const flattenArray = array => array.reduce((acc, cur) => {
  if (Array.isArray(cur)) {
    return [...acc, ...flattenArray(cur)];
  }
  return [...acc, cur];
}, []);
