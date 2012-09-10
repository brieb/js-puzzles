function findAllSubsets(set) {
  if (set.length === 0) {
    return;
  }

  console.log(set);

  for (var i = 0; i < set.length; i++) {
    var removed = set.splice(i, 1)[0];
    findAllSubsets(set);
    set.splice(i, 0, removed);
  }
}

//findAllSubsets([1,2,3]);

function findAllSubsets2(set) {
  var maxMask = Math.pow(2, set.length) - 1;
  for (var mask = 0; mask <= maxMask; mask++) {
    var maskCopy = mask;
    var index = 0;
    var curSet = [];
    while (maskCopy !== 0) {
      if (maskCopy & 1) {
        curSet.push(set[index]);
      }
      index++;
      maskCopy >>= 1;
    }
    console.log(curSet);
  }
}

findAllSubsets2([1,2,3]);
