function findInSortedMatrix(matrix, value) {
  var maxRow = _findHighestValidIndex(matrix, byRow, index, low, high, value);
}

function findInSortedMatrix(matrix, value, minRow, maxRow, minCol, maxCol) {
  var row = _findHighestValidIndex(matrix, true, minRow, minRow, maxRow, value);
  var col = _findHighestValidIndex(matrix, false, minCol, minCol, maxCol, value);
}

function _findHighestValidIndex(matrix, byRow, index, low, high, value) {
  if (low >= high) {
    return low - 1;
  }
  var mid = Math.floor((high + low) / 2);
  var matrixValue = _getValue(matrix, byRow, index, mid);
  if (value < matrixValue) {
    return _findHighestValidIndex(matrix, byRow, index, low, mid - 1, value);
  } else {
    return _findHighestValidIndex(matrix, byRow, index, mid + 1, high, value);
  }
}
  
function _getValue(matrix, byRow, index, mid) {
  var rowIndex = byRow ? index : mid;
  var colIndex = byRow ? mid : index;
  return matrix[rowIndex, colIndex];
}

var matrix = [
  [1, 3, 4, 7, 9],
  [4, 5, 6, 7, 9],
  [5, 6, 9, 12, 19],
  [10, 11, 13, 17, 27]
];

var i = _findHighestValidIndex(matrix, false, 0, 0, 3, 6);
console.log(i);
