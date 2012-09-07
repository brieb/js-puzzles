function mergeBIntoAV1(A, B) {
  var indexA = 0, indexB = 0;

  while (indexA < A.length && indexB < B.length) {
    if (A[indexA] <= B[indexB]) {
      indexA++;
    } else if (B[indexB] < A[indexA]) {
      A.splice(indexA, 0, B[indexB]);
      indexA++;
      indexB++;
    }
  }

  while (indexB < B.length) {
    A[indexA] = B[indexB];
    indexA++;
    indexB++;
  }

  return A;
}

function mergeBIntoA(A, B) {
  var indexA = A.length - B.length - 1,
      indexB = B.length - 1,
      indexLast = A.length - 1;

  while (indexA >= 0 && indexB >= 0) {
    if (A[indexA] >= B[indexB]) {
      A[indexLast] = A[indexA];
      indexA--;
      indexLast--;
    } else {
      A[indexLast] = B[indexB];
      indexB--;
      indexLast--;
    }
  }

  while (indexB >= 0) {
    A[indexLast] = B[indexB];
    indexLast--;
    indexB--;
  }

  return A;
}

A = new Array(5);
A.unshift(2,4,6,8,10,11);
console.log(mergeBIntoA(A, [1,2,3,4,5]));

// A = new Array(11);
// A.push.apply([2,4,6,8,10,11]);
// console.log(mergeBIntoA(A, [1,2,3,4,5,10,11,12]));
