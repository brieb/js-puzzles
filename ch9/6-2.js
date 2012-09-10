function findInSortedMatrix(matrix, value) {
  var rowIndex = 0;
  while (rowIndex < matrix.length) {
    var row = matrix[rowIndex];
    if (row[0] === value) {
      return { row: rowIndex, col: 0 };
    }
    if (row[row.length - 1] === value) {
      return { row: rowIndex, col: row.length - 1 };
    }

    if (row[0] < value && row[row.length - 1] < value) {
      rowIndex++;
    } else if (row[0] < value && row[row.length - 1] > value) {
      var found = _binarySearch(row, value);
      if (found !== -1) {
        return { row: rowIndex, col: found };
      }
      rowIndex++;
    } else {
      return false;
    }
  }
}

function _binarySearch(array, value) {
  var low = 0,
    high = array.length - 1,
    mid;
  
  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    
    if (array[mid] === value) {
      return mid;
    }
    
    if (array[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  
  return -1;
}

var matrix = [
  [1, 3, 4, 7, 9],
  [4, 5, 6, 7, 9],
  [5, 6, 9, 12, 19],
  [10, 11, 13, 17, 27]
];

var where = findInSortedMatrix(matrix, 27);
console.log(where);
