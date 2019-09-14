'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let objectValue = objectB.value;
  collectionA.forEach(element => {
    let elementKey = element.key;
    if (objectValue.includes(elementKey)) {
      element.count--;
    }
  });
  return collectionA;
}
