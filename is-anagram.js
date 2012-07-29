String.prototype.isAnagram = function(other) {
  if (this.length !== other.length)
    return false;

  var charCounts = {};
  for (var i=0; i < this.length; i++) {
    if(!charCounts[this[i]])
      charCounts[this[i]] = 0;
    charCounts[this[i]]++;
  }

  for (var i=0; i < other.length; i++) {
    if (!charCounts[other[i]] || charCounts[other[i]] === 0)
      return false;
    charCounts[other[i]]--;
  }

  return true;
};

console.log("goober <-> booger? " + "goober".isAnagram("booger"));
console.log("goober <-> booer? " + "goober".isAnagram("booer"));
console.log("goober <-> EMPTY_STRING? " + "goober".isAnagram(""));
