const returnOnlyIntegers = array => {
  const integerArray = array.filter((element) => Number.isInteger(element));
  return integerArray;
}
