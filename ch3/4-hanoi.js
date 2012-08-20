#!/usr/local/bin/node

var pegs = [
  [5, 4, 3, 2, 1],
  [],
  []
];

// function printPegs() {
//   var str = '';
//   str += '| ' + pegs[0][i] ? pegs[0][i]
// }

function hanoi(n, from, to, alt) {
  if (n === 0)
    return;

  hanoi(n - 1, from, alt, to);
  pegs[to].push(pegs[from].pop());
  console.log(pegs);
  hanoi(n - 1, alt, to, from);
}

hanoi(pegs[0].length, 0, 2, 1);
