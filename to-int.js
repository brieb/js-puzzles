Number.prototype.toInt = function() {
  return this > 0 ? Math.floor(this) : Math.floor(this) + 1;
};

var a = -123.3;
console.log(a.toInt());
