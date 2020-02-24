const rlSync = require('readline-sync')

const evenOrOdd = function (number) {
  if (isNaN(Number(number))) {
    return 'Error: Not a number!';
  } else if (Number(number) % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

console.log(
  evenOrOdd(
    rlSync.question('Please enter a number: ')
  )
);

/*
  Below is the launch school solution which uses Number.isInteger()
  to check if the input is an integer.

  function evenOrOdd(number) {
    if (!Number.isInteger(number)) {
      console.log('Sorry, the value you passed is not an integer');
      return;
    }

    if (number % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  }
*/
