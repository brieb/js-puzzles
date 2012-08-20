#!/usr/local/bin/node

var array = [];
var stackTops = {};
var lastIndex = 0;
var freeList = null;

function push(stackID, value) {
  var index;
  if (freeList) {
    index = freeList.index;
    freeList = freeList.prev;
  } else {
    index = lastIndex;
    lastIndex++;
  }

  array[index] = {
    index: index,
    value: value
  };
  if (stackTops[stackID] !== undefined) {
    array[index].prevTop = stackTops[stackID];
  }

  stackTops[stackID] = index;
}

function pop(stackID) {
  if (stackTops[stackID] === undefined) {
    console.log("No more values in stack.");
    return;
  }

  var element = array[stackTops[stackID]];
  stackTops[stackID] = element.prevTop;
  freeList = {
    index: element.index,
    prev: freeList
  };
  return element.value;
}

push(0, "A");
push(0, "A");
pop(0);
push(0, "A");
pop(0);
push(1, "B");
console.log(array);

console.log(pop(1));
console.log(pop(0));
push(2, "C");
push(2, "C");
console.log(freeList);
console.log(array);
