const power = (a, n) => {
  if (n === 0) return 1;
  const x = power(a, Math.floor(n/2));
  if (n % 2 === 0) return x * x;
  else return a * x * x;
};
