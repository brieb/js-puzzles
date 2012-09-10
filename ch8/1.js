function fibRecursive(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

function fibIterative(n) {
 if (n < 2) {
   return n;
 }

 var minus2 = 0,
   minus1 = 1;
  for (var i = 2; i < n; i++) {
    var tmp = minus2 + minus1;
    minus2 = minus1;
    minus1 = tmp;
  }
  return minus1 + minus2;
}
