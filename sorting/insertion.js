function sort(array) {
  for (var i = 1; i < array.length; i++) {
    var j = i;
    while (j > 0 && array[i] < array[j-1])
      j--;
    var tmp = array[i];
    for (var k = i; k > j; k--)
      array[k] = array[k-1];
    array[j] = tmp;
  }
}

var array = [3,5,1,7,2];
sort(array);
console.log(array);
