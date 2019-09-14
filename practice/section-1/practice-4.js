'use strict';

function collectSameElements(collectionA, objectB) {
  let sameElements = [];
  let objectValue = objectB.value;
  collectionA.forEach(element => {
    let elementKey = element.key;
    if (objectValue.includes(elementKey)) {
      sameElements.push(elementKey);
    }
  });
  return sameElements;
}
