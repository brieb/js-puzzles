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


var knownPairs = {
  0: [''],
  1: ['()']
};


/**
 * Num pairs: count(i) = count(i-1) - 1
 */
function parens2(numPairs) {
  if (knownPairs[numPairs]) {
    return knownPairs[numPairs];
  }

  var results = [];
  var subPairs = parens2(numPairs - 1);
  for (var i = 0; i < subPairs.length; i++) {
    var pair = subPairs[i];
    results.push.apply(results, _embrace(pair));
    results.push.apply(results, _parallel(pair));
  }
  knownPairs[numPairs] = results;
  return results;
}

function _embrace(str) {
  return [ '(' + str + ')' ];
}

function _parallel(str) {
  var onLeft = '()' + str;
  var onRight = str + '()';
  if (onLeft !== onRight) {
    return [ onLeft, onRight ];
  } else {
    return [ onLeft ];
  }
}

var p = parens(4);
console.log(p.length, p);

var p2 = parens2(6);
console.log(p2.length, p2, knownPairs);

for (var pair in knownPairs) {
  console.log(pair, knownPairs[pair].length);
}
