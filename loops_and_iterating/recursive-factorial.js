const rlSync = require('readline-sync');

const factorial = number => {
  if (number <= 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

console.log(
  factorial(
    Number(
      rlSync.question('Please enter a number: ')
    )
  )
);
