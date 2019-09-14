'use strict';

function collectSameElements(collectionA, objectB) {
  let sameElements = [];
  let objectValue = objectB.value;
  collectionA.forEach(element => {
    if (objectValue.includes(element)) {
      sameElements.push(element);
    }
  });
  return sameElements;
}
