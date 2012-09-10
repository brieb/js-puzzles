function existsThreeSumToZero(integers) {
  var hash = {};
  for (var i = 0; i < integers.length; i++) {
    hash[integers[i]] = true;
  }

  for (var i = 0; i < integers.length; i++) {
    var integer1 = integers[i];
    for (var j = i + 1; j < integers.length; j++) {
      var integer2 = integers[j];
      var sum = integer1 + integer2;
      var needed = sum * -1;
      if (needed !== integer1 && needed !== integer2 && hash[needed]) {
        return true;
      }
    }
  }

  return false;
}

console.log(existsThreeSumToZero([1,2,3,4,-1,2]));
