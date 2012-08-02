var m = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

var m = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
];

var m = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25]
];

function printMatrix(m) {
  for (var i=0; i < m.length; i++) {
    var row = '';
    for (var j=0; j < m[i].length; j++) {
      row += m[i][j] + ' ';
    };
    console.log(row);
  };
}

function rotateMatrix(m) {
  var minY = 0;
  var maxY = m.length - 1;
  var minX = 0;
  var maxX = Math.floor(m.length / 2);
  var x, n, tmp, tmp2;
  for (; minX < maxX; minX++) {
    n = maxY - minY;
    for (var i = 0; i < n; i++) {
      y = minY + i
      x = minX;
      tmp = m[x][y];
      m[x][y] = m[x+(n-i)][y-i];
      m[x+(n-i)][y-i] = m[]

      x += i;
      y += n - i;
      tmp2 = m[x][y];
      m[x][y] = tmp;

      x += n - i;
      y -= i;
      tmp = m[x][y];
      m[x][y] = tmp2;

      x -= i;
      y -= n - i;
      tmp2 = m[x][y];
      m[x][y] = tmp;

      x -= n - i;
      y += i;
      tmp = m[x][y];
      m[x][y] = tmp2;
    };
    minY++;
    maxY--;
  };
  printMatrix(m);
}

printMatrix(m);
rotateMatrix(m);
