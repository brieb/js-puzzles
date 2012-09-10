function permutationsOfString(prefixes, prefix, suffix) {
  if (suffix === '') {
    prefixes.push(prefix);
    return;
  }

  var char = suffix[0];
  for (var j = 0; j <= prefix.length; j++) {
    var prefixWithChar = prefix.substring(0, j) + char + prefix.substring(j);
    permutationsOfString(prefixes, prefixWithChar, suffix.substring(1));
  }
}

var prefixes = [];
permutationsOfString(prefixes, '', 'ABCD');
console.log(prefixes.length);
