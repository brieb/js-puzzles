function ReverseString(str) {
  str = str.split('');
  var start = 0, end = str.length - 1, tmp;
  while (start < end) {
    tmp = str[start];
    str[start] = str[end];
    str[end] = tmp;
    start++;
    end--;
  }
  return str.join('');
}

function ReverseString2(str) {
  var chars = str.split('');
  str = '';
  for (var i = chars.length-1; i >= 0; i--) {
    str += chars[i];
  }
  return str;
}

console.log(ReverseString("123"));
console.log(ReverseString2("123"));

