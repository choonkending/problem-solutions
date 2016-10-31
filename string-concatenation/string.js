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

