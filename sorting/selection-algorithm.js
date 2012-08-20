function partition(array, left, right, pivot) {
  var pivotValue = array[pivot];
  array[pivot] = array[right];
  array[right] = pivotValue;

  var turningPoint = left;
  for (var i = left; i < right; i++) {
    if (array[i] <= pivotValue) {
      var tmp = array[turningPoint];
      array[turningPoint] = array[i];
      array[i] = tmp;
      turningPoint++;
    }
  }

  var tmp = array[turningPoint];
  array[turningPoint] = array[right];
  array[right] = tmp;

  return turningPoint;
}


function findKth(array, left, right, k) {
  var mid = Math.floor((left + right + 1) / 2);
  var index = partition(array, left, right, mid);

  if (index === k - 1)
    return index;

  var delta = k - 1 - index;
  if (delta < 0)
    return findKth(array, left, index - 1, k);
  else
    return findKth(array, index + 1, right, k);
}

var array = [5,2,4,3,6,1,9,30,33,34,35,15,21];
// console.log(partition(array, 0, array.length-1, 2));
console.log(findKth(array, 0, array.length-1, 13));
console.log(array);
