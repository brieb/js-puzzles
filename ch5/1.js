function setBitsBetween(N, M, i, j) {
  var allOnes = Math.pow(2, 32) - 1;
  var left = allOnes - ((1 << j) - 1);
  var right = (1 << i) - 1;
  var mask = left | right;
  return (N & mask) | (M << i);
}

var N = 133;
var M = 7;
var result = setBitsBetween(N, M, 3, 5);
console.log(N.toString(2));
console.log(M.toString(2));
console.log(result.toString(2));
