'use strict';

function collectSameElements(collectionA, collectionB) {
  let sameElements = [];
  let subCollection = collectionB[0];
  collectionA.forEach(element => {
    if (subCollection.includes(element)) {
      sameElements.push(element);
    }
  });
  return sameElements;
}
