function parens1(numPairs) {
  if (numPairs === 0) {
    return [ '' ];
  }
  if (numPairs === 1) {
    return [ '()' ];
  }

  var all = [];
  for (var i = numPairs; i > 0; i--) {
    var cur = '';
    for (var j = 0; j < i; j++) {
      cur += '(';
    }
    for (j = 0; j < i; j++) {
      cur += ')';
    }
    var suffixes = parens(numPairs - i);
    for (j = 0; j < suffixes.length; j++) {
      all.push(cur + suffixes[j]);
    }
  }
  return all;
}

function parens(numPairs) {
  return _parens(numPairs, numPairs, '');
}

function _parens(left, right, str) {
  if (left === 0 && right === 0) {
    return [ str ];
  }

  var results = [];
  if (left > 0) {
    results.push.apply(results, _parens(left - 1, right, str + '('));
  }
  if (right > left) {
    results.push.apply(results, _parens(left, right - 1, str + ')'));
  }

  return results;
}

var p = parens(3);
console.log(p.length, p);
var p1 = parens1(3);
console.log(p1.length, p1);
