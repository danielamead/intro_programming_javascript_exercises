const arrayOfStrings = ['a', 'abcd', 'abcde', 'abc', 'ab'];

const oddLengthsArray = arrayOfStrings.reduce((accumulator, string) => {
  if (string.length % 2 !== 0) {
    accumulator.push(string.length);
  }
  return accumulator;
}, []);
