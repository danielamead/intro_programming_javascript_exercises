const arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

const oddLengths = arr.map(string => string.length).filter(length => length % 2 !== 0);
