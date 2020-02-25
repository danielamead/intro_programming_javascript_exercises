
const evenOrOddMapper = array => {
  const evenOrOddArray = array.map(number => {
    if (number % 2 === 0) {
      return 'even'
    } else {
      return 'odd'
    }
  });
  return evenOrOddArray;
}
