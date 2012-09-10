var swapOddAndEvenBits = function(integer) {
  var oddMask = 0xAAAAAAAA;
  var evenMask = 0x55555555;
  var odd = integer & oddMask;
  var even = integer & evenMask;
  even <<= 1;
  odd >>>= 1;
  return even | odd;
}

var swapOddAndEvenBitsv1 = function(integer) {
  var oddMask = 2;
  for (var i = 2; i < 32; i += 2) {
    oddMask <<= 2;
    oddMask |= 2;
  }
  var evenMask = oddMask >>> 1;

  var odd = integer & oddMask;
  var even = integer & evenMask;

  even <<= 1;
  odd >>>= 1;

  return even | odd;
}

console.log(swapOddAndEvenBits(parseInt("01001011", 2)).toString(2));
