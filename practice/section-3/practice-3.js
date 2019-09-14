'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let collectionC = countSameElements(collectionA);
  let objectValue = objectB.value;
  collectionC.forEach(element => {
    let elementKey = element.key;
    if (objectValue.includes(elementKey)) {
      let countThree = element.count / 3;
      element.count -= parseInt(countThree);
    }
  });
  return collectionC;
}

function countSameElements(collection) {
  let sameElements = [];
  collection.forEach(element => {
    let existingObject = sameElements.find(({ key }) => key === element);
    if (!existingObject) {
      sameElements.push({ key: element, count: 1 });
    } else {
      existingObject.count++;
    }
  });
  return sameElements;
}