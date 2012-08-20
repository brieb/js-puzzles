#!/usr/local/bin/node

function sortStack(stack, isAsc) {
  if (stack.length <= 1)
    return stack;

  var pivot = stack.pop();
  var divided = _divide(stack, pivot);
  return _join(
    sortStack(divided.lower, !isAsc),
    sortStack(divided.higher, !isAsc),
    pivot,
    isAsc
  );
}

function _join(lower, higher, pivot, isAsc) {
  var first = isAsc ? higher : lower;
  var second = isAsc ? lower : higher;

  var merged = [];
  _pushAll(first, merged);
  merged.push(pivot);
  _pushAll(second, merged);

  return merged;
}

function _pushAll(from, to) {
  while (from.length !== 0) {
    to.push(from.pop());
  }
}

function _divide(stack, pivot) {
  var lower = [];
  var higher = [];

  while (stack.length !== 0) {
    var cur = stack.pop();
    if (cur <= pivot) {
      lower.push(cur);
    } else {
      higher.push(cur);
    }
  }

  return {
    lower: lower,
    higher: higher
  };
}

// var stack = [6,7,5,1,3];
var stack = [6,7,5,1,3,9];
var sorted = sortStack(stack, false);
console.log(sorted);
