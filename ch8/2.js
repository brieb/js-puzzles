function numPaths(N, destX, destY, x, y) {
  if (x === destX && y === destY) {
    return 1;
  }
  if (x > destX || y > destY) {
    return 0;
  }
  return numPaths(N, destX, destY, x+1, y) +
    numPaths(N, destX, destY, x, y+1);
}

console.log(numPaths(3, 2, 2, 0, 0));


function numPaths2(grid, destX, destY, x, y, curPath, paths) {
  if (x > destX || y > destY || !grid[x][y]) {
    return false;
  }
  if (x === destX && y === destY) {
    paths.push(curPath.splice(0));
    return true;
  }

  var tryCoord = function(x, y) {
    curPath.push({ x:x, y:y });
    var success = numPaths2(grid, destX, destY, x, y, curPath, paths);
    if (!success) {
      curPath.pop();
    }
  };

  tryCoord(x+1, y);
  tryCoord(x, y+1);
}

var grid = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 1, 1]
];

var paths = [];
numPaths2(grid, 2, 2, 0, 0, [], paths);
console.log(paths.length, paths);
