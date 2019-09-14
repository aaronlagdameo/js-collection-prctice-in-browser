'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let objectValue = objectB.value;
  collectionA.forEach(element => {
    let elementKey = element.key;
    if (objectValue.includes(elementKey)) {
      let countThree = element.count / 3;
      element.count -= parseInt(countThree);
    }
  });
  return collectionA;
}
