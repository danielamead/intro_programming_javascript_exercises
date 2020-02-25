const numbers = [3, 5, 7];

const sumOfSquares = numbers.reduce((accumulator, value) => {
  return accumulator + (value * value)
}, 0);

console.log(sumOfSquares);
