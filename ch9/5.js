function find(array, string) {
  var low = 0,
      high = array.length - 1;

  while (low <= high) {

    while (array[low] === '') {
      low++;
    }
    while (array[high] === '') {
      high--;
    }
    if (low >= high) {
      return -1;
    }

    var mid = Math.floor((low + high) / 2);
    while (array[mid] === '') {
      mid--;
    }

    if (array[mid] === string) {
      return mid;
    } else if (array[mid] < string) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

console.log(find([ 'at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', '' ], 'ball'));
console.log(find([ 'at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', '' ], 'car'));
