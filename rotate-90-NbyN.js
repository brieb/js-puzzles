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
  var maxY = m.length - 1;
  var maxX = Math.floor(m.length / 2);
  var x, tmp, tmp2;
  var minY = 0;
  for (var startx = 0; startx < maxX; startx++) {
    console.log(startx);
    console.log(minY);
    var n = maxY - minY;
    for (var i = 0; i < n; i++) {
      y = minY + i
      x = startx;

      console.log("i: " + i);
      console.log("x: " + x + " y: " + y);
      tmp = m[x][y];

      x += i;
      y += n - i;
      console.log("x: " + x + " y: " + y);
      tmp2 = m[x][y];
      m[x][y] = tmp;

      x += n - i;
      y -= i;
      tmp = m[x][y];
      console.log("x: " + x + " y: " + y);
      m[x][y] = tmp2;

      x -= i;
      y -= n - i;
      console.log("x: " + x + " y: " + y);
      tmp2 = m[x][y];
      m[x][y] = tmp;

      x -= n - i;
      y += i;
      console.log("x: " + x + " y: " + y);
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
