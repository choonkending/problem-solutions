/*
 * Write a function that accepts an argument, n that outputs the letter "s" n
 * times
 */

// Basic implementation
function printS(n) {
  for( let i = 0; i < n; i++ ) {
    console.log("s");
  }
}

function printS(n) {
  let result = "s";
  // 1 + 2 + 4 + 7
  while (result.length < n) {
    result = result + result;
  }
  console.log(result.slice(0, n));
}

function repeat(n) {
  let result = 's';
  let repeat = '';
  while (true) {
    if ((n & 1) === 1) {
      repeat+=result;
    }
    n >>>= 1;
    if (n === 0) break;
    result += result;
  }
  return repeat;
}

