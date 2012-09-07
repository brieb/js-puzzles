function find(array, string) {
  return _find(array, string, 0, array.length - 1);
}

function _find(array, string, low, high) {
  while (array[low] === '') {
    low++;
  }
  while (array[high] === '') {
    high--;
  }

  if (low >= high) {
    return false;
  }

  var mid = Math.floor((low + high) / 2);
  if (array[mid] === '') {
    mid = _getNonEmptyLower(array, mid - 1, low) ||
      _getNonEmptyHigher(array, mid + 1, high);
    if (!mid) return false;
  }

  console.log(low, mid, high);

  if (array[mid] === string) {
    return mid;
  }
  if (array[mid] < string) {
    return _find(array, string, mid + 1, high);
  }
  if (array[mid] > string) {
    return _find(array, string, low, mid - 1);
  }
}

function _getNonEmptyHigher(array, i, high) {
  while (i <= high && array[i] === '') {
    i++;
  }
  if (i > high) {
    return false;
  }
  return i;
}

function _getNonEmptyLower(array, i, low) {
  while (i >= low && array[i] === '') {
    i--;
  }
  if (i < low) {
    return false;
  }
  return i;
}

// console.log(find([ 'at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', '' ], 'ball'));
console.log(find([ 'at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', '' ], 'car'));
