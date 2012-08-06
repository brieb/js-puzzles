#!/usr/local/bin/node

var _s = require('underscore.string');

function printMatrix(m) {
  for (var i=0; i < m.length; i++) {
    var row = '';
    for (var j=0; j < m[i].length; j++) {
      row += _s.sprintf("%2d ", m[i][j]);
    };
    console.log(row);
  };
  console.log('');
}

function zeroMatrix(m) {
  var rows = {};
  var cols = {};

  for (var i=0; i < m.length; i++) {
    for (var j=0; j < m[i].length; j++) {
      if (m[i][j] === 0) {
        rows[i] = true;
        cols[j] = true;
      }
    }
  }

  for (var i=0; i < m.length; i++) {
    for (var j=0; j < m[i].length; j++) {
      if (rows[i] || cols[j]) {
        m[i][j] = 0;
      }
    }
  }
}

var m = [
  [1,2,3,4],
  [0,1,0,1],
  [1,2,3,4],
  [0,1,1,0]
];

printMatrix(m);
zeroMatrix(m);
printMatrix(m);
