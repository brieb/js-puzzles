function sameNumOnesBruteForce(num) {
  var result = {
    lower: -1,
    higher: -1
  };
  var goal = _getNumOnes(num);

  var lower = num - 1;
  var higher = num + 1;
  var min = 0;
  var max = Math.pow(2, 32) - 1;

  while (lower >= min) {
    if (_getNumOnes(lower) === goal) {
      result.lower = lower;
      break;
    }
    lower--;
  }

  while (higher <= max) {
    if (_getNumOnes(higher) === goal) {
      result.higher = higher;
      break;
    }
    higher++;
  }

  return result;
}

function _getNumOnes(num) {
  var count = 0;
  while (num > 0) {
    count += num & 1;
    num >>= 1;
  }
  return count;
}

function sameNumOnes(num) {
  if (num === 0) {
    return { higher: -1, lower: -1 };
  }
  return {
    lower: _findSameNumOnesLower(num),
    higher: _findSameNumOnesHigher(num)
  };
}

function _findSameNumOnesLower(num) {
  var lower = num;

  // find first zero
  var numOnes = 0;
  while (lower & 1) {
    lower >>= 1;
    numOnes++;
  }

  // find next one
  var numZeroes = 0;
  while ((lower & 1) === 0) {
    if (numZeroes + numOnes >= 32) {
      return -1;
    }
    lower >>= 1;
    numZeroes++;
  }

  lower = (lower << 1) - 1;
  // -1 because we've introduced an additional 0 in the subtraction
  numZeroes--;

  var oneMask = Math.pow(2, numOnes) - 1;
  lower = (lower << numOnes) | oneMask;
  lower <<= numZeroes;

  return lower;
}

function _findSameNumOnesHigher(num) {
  var higher = num;

  // find first one
  var numZeroes = 0;
  while ((higher & 1) === 0) {
    higher >>= 1;
    numZeroes++;
  }

  // find next zero
  var numOnes = 0;
  while (higher & 1) {
    higher >>= 1;
    numOnes++;
  }

  higher = (higher + 1) << 1;
  // -1 because we've introduced an additional 1 in the addition
  numOnes--;

  higher <<= numZeroes;
  var oneMask = Math.pow(2, numOnes) - 1;
  higher = (higher << numOnes) | oneMask;

  return higher;
}

console.log(sameNumOnesBruteForce(14));
console.log(sameNumOnes(14));
