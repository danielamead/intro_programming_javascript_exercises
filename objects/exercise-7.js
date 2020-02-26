const objCopier = (objToCopy, arrayOfKeys) => {
  if (arrayOfKeys) {
    const copy = {};
    for (let key in objToCopy) {
      if (objToCopy.hasOwnProperty(key) && arrayOfKeys.includes(key)) {
        copy[key] = objToCopy[key];
      }
    }
    return copy;
  } else {
    const copy = Object.assign({}, objToCopy);
    return copy;
  }
}

/*

Below is launch schools solution. Calling forEach on the array
of keys is more optimal than my for/in loop. The variable names
are also more readable than mine. The addition of two well placed
empty lines also make the code more readable.

function copyObj(sourceObject, keys) {
  let destinationObject = {};

  if (keys) {
    keys.forEach(function(key) {
      destinationObject[key] = sourceObject[key];
    });

    return destinationObject;
  } else {
    return Object.assign(destinationObject, sourceObject);
  }
}

*/
