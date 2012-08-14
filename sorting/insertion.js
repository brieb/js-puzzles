function sort(array) {
  for (var i = 1; i < array.length; i++) {
    var tmp = array[i];
    var j = i;
    while (j > 0 && tmp < array[j-1]) {
      array[j] = array[j-1];
      j--;
    }
    array[j] = tmp;
  }
}

var array = [3,5,1,7,2];
sort(array);
console.log(array);
