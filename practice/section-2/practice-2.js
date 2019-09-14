'use strict';

function countSameElements(collection) {
  let sameElements = [];
  collection.forEach(element => {
    let object = splitElement(element);
    let existingObject = sameElements.find(({ key }) => object.key === key);
    if (!existingObject) {
      sameElements.push(object);
    } else {
      existingObject.count++;
    }
  });
  return sameElements;
}

function splitElement(element) {
  let key = element;
  let count = 1;

  if (element.includes('-')) {
    [key, count] = element.split('-');
  }
  return { key: key, count: parseInt(count) };
}
