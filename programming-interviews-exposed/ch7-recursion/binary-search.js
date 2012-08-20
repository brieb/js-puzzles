#!/usr/local/bin/node

Number.prototype.toInt = function() {
  return this > 0 ? Math.floor(this) : Math.floor(this) + 1;
};

function binarySearch(array, lower, upper, value) {
  if (upper < lower) return -1;

  var mid = ((upper + lower) / 2).toInt();
  if (array[mid] === value)
    return mid;

  if (value < array[mid]) {
    return binarySearch(array, lower, mid - 1, value);
  } else {
    return binarySearch(array, mid + 1, upper, value);
  }
}

function binarySearchIter(array, lower, upper, value) {
  while (lower <= upper) {
    var mid = ((lower + upper) / 2).toInt();

    if (array[mid] === value) {
      return mid;
    }

    if (value < array[mid]) {
      upper = mid - 1;
    } else {
      lower = mid + 1;
    }
  }

  return -1;
}

var array = [1,2,3,4,5];
var i = binarySearchIter(array, 0, array.length, 2);
console.log(i);
