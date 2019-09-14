'use strict';

function countSameElements(collection) {
  let sameElements = [];
  collection.forEach(element => {
    let object = splitElement(element);
    let existingObject = sameElements.find(({ name }) => object.name === name);
    if (!existingObject) {
      sameElements.push(object);
    } else {
      existingObject.summary += object.summary;
    }
  });
  return sameElements;
}

function splitElement(element) {
  let name = element;
  let summary = 1;

  if (element.includes('-')) {
    [name, summary] = element.split('-');
  }
  else if (element.includes(':')) {
    [name, summary] = element.split(':');
  }
  else if (element.includes('[')) {
    [name, summary] = element.split('[')
  }
  return { name: name, summary: parseInt(summary) };
}
