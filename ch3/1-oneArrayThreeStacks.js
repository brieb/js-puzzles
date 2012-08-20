#!/usr/local/bin/node

var numStacks = 3;

var array = [];
var stackIndexes = {};
for (var i = 1; i  <= numStacks; i ++) {
  stackIndexes[i] = i - 1;
};

function _updateStackIndex(stackID, isPush) {
  stackIndexes[stackID] += isPush ? numStacks : -numStacks;
}

function push(stackID, elem) {
  array[stackIndexes[stackID]] = elem;
  _updateStackIndex(stackID, true);
}

function pop(stackID) {
  if (stackIndexes[stackID] < numStacks) {
    console.log("No more elements in stack.");
    return;
  }

  _updateStackIndex(stackID, false);
  return array[stackIndexes[stackID]];
}

push(1, "A");
push(1, "A");
push(1, "A");
push(2, "B");
push(2, "B");
push(2, "B");
push(3, "C");
push(3, "C");
push(3, "C");

console.log(array);

console.log(pop(3));
console.log(pop(3));
console.log(pop(3));
console.log(pop(3));

console.log(array);

console.log(pop(2));
console.log(pop(2));
console.log(pop(2));
console.log(pop(2));

console.log(array);

push(2, "B2");
push(2, "B2");

console.log(array);
