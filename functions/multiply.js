const rlSync = require('readline-sync');

const multiply = function () {
  let multiplicand = rlSync.question('Gimme a multiplicand, honey ;)\n');
  let multiplier = rlSync.question('Now gimme that multiplier, hot stuff ;)\n');
  const product = multiplicand * multiplier;
  return `${multiplicand} * ${multiplier} = ${product}`;
}

console.log(multiply());

/* below is launch school's solution. It is a better solution because
   they have separated the two procedures of prompting the user for
   numbers and then multiplying them, which makes the code reusuable,
   less prone to bugs, and more readable. Not to mention that is what
   the directions specify, which I can see clearly after writing my own
   code, viewing the launch school solution, and rereading the directions.
   Still, I like to keep my own code and to compare it to the launch school
   solution.

function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

*/
