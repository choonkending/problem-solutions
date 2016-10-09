const romanArabicMap = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};

const subNumberMap = {
  "IV": 4,
  "IX": 9,
  "XL": 40,
  "XC": 90,
  "CD": 400,
  "CM": 900
};

const getArabic = roman => romanArabicMap[roman];

const convertRomanToArabic = str => str.split('').reverse().reduce((acc, cur, i, arr) => {
  const currentNumber = getArabic(cur);
  if (currentNumber < getArabic(arr[i-1])) {
    return acc - currentNumber;
  }
  return acc + currentNumber;
}, 0);


