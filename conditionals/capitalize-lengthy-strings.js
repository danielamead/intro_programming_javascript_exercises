const rlSync = require('readline-sync')

const capitalizeLengthyStrings = function (string) {
  if (string.length >= 10) {
    console.log(string.toUpperCase())
    return string.toUpperCase();
  } else {
    console.log(string);
    return string;
  }
}

capitalizeLengthyStrings(
  rlSync.question('Please enter a string: ')
);
