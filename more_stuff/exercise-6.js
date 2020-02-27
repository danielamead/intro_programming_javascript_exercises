const matcher = (arrayOfStrings, regex) => {
  const arrayOfMatches = arrayOfStrings.filter((element) => regex.test(element));
  return arrayOfMatches;
}
