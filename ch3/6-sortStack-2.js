function sortStack(stack) {
  if (stack.length === 0) return stack;

  var sorted = [];
  var tmp = [];

  while (stack.length > 0) {
    var cur = stack.pop();
    while (sorted.length > 0 && sorted[sorted.length - 1] < cur) {
      tmp.push(sorted.pop());
    }
    sorted.push(cur);
    while (tmp.length > 0) {
      sorted.push(tmp.pop());
    }
  }

  return sorted;
}

function sortStack2(stack) {
  if (stack.length === 0) return stack;

  var sorted = [];

  while (stack.length > 0) {
    var cur = stack.pop();
    while (sorted.length > 0 && sorted[sorted.length - 1] < cur) {
      stack.push(sorted.pop());
    }
    sorted.push(cur);
  }

  return sorted;
}

console.log(sortStack2([7,1,6,3,8,9,2]));
