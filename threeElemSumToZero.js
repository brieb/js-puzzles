function existsThreeSumToZero(integers) {
  var sets = [];
  genSubsetsOfSizeThree(integers, sets, 0);

  for (var i = 0; i < sets.length; i++) {
    var set = sets[i];
    var sum = set.reduce(function(prev, cur) {
      return prev + cur;
    }, 0);
    if (sum === 0) {
      return true;
    }
  }

  return false;
}

function genSubsetsOfSizeThree(set, sets, index) {
  if (set.length === 3) {
   sets.push(set.slice(0));
   return;
  }

  for (var i = index; i < set.length; i++) {
    var removed = set.splice(i, 1)[0];
    genSubsetsOfSizeThree(set, sets, i);
    set.splice(i, 0, removed);
  }
}

console.log(existsThreeSumToZero([1,2,3,4,-1,-2]));
