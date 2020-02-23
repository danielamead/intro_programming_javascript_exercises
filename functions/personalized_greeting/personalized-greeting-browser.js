/*
- write a function to be invoked twice, the two return values will be logged to the chrome console at the end of this program

- the function will solicit the users first name on its first invocation and last on its second invocation

- the function will return the name as a string
*/

let invocation = 1;
let whichName = 'first';
let firstName;
let lastName;

const getNames = function () {
  if (invocation === 1) {
    invocation++;
    firstName = prompt(`Enter your ${whichName} name`);
    whichName = 'last';
    return firstName;
  } else {
    lastName = prompt(`Enter your ${whichName} name`);
    return lastName;
  }
}

const greeter = function (nombreUno = 'Mi', nombreDos = 'amigo') {
  return `Hola, ${nombreUno} ${nombreDos}`;
}

console.log(greeter(getNames(), getNames()));
