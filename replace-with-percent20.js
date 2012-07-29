String.prototype.replaceWithPercent20 = function() {
  return this.replace(/ /g, '%20');
};


String.prototype.replaceWithPercent20v2 = function() {
  var newStr = '';
  for (var i=0; i < this.length; i++) {
    if(this[i] === ' ')
      newStr += '%20';
    else
      newStr += this[i];
  }
  return newStr;
};

var replaceWithPercent20v3 = function(str) {
  var numSpaces = 0;
  for (var i=0; i < str.length; i++) {
    if(str[i] === ' ')
      numSpaces++;
  }
  var additionalChars = -numSpaces + numSpaces * 3;
  var newLength = str.length + additionalChars;
  // extend string
  var extension = str.substr(0, additionalChars);
  str = extension.concat(str);
  for (var i=str.length-1; i >= 0; i--) {
    if (str[i] === ' ') {
      str = str.substring(2,i) + '%20' + str.substring(i+1);
    }
  }

  return str;
};


console.log("happy birthday mom!".replaceWithPercent20());
console.log("happy birthday mom!".replaceWithPercent20v2());
console.log(replaceWithPercent20v3("happy birthday mom!"));
