function numBits(n1, n2) {
  var count = 0;
  for (var xor = n1 ^ n2; xor !== 0; xor >>= 1) {
    count += xor & 1;
  }
  return count;
}

console.log(numBits(31, 14));
