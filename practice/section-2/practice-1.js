'use strict';

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
