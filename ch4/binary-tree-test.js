var BinaryTree = require('./binary-tree');
var Node = require('./binary-tree-node');

var bt = new BinaryTree();

var nA = new Node("A");
var nB = new Node("B");
var nC = new Node("C");
var nD = new Node("D");
var nE = new Node("E");
var nF = new Node("F");
var nG = new Node("G");
var nH = new Node("H");

// nA.left = nB;
// nA.right = nC;
// nB.left = nD;
// nB.right = nE;
// nE.right = nF;
// nC.right = nG;
// nG.right = nH;

// bt.root = nB;
// bt.insert(nA);
// bt.insert(nD);
// bt.insert(nC);
// bt.insert(nE);
// bt.insert(nF);

// console.log(bt.isBalanced());

bt.createFromSortedArray([1,2,3,4,5,6,7]);
// bt.createFromSortedArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);
bt.print();
bt.printInOrder();

var lists = bt.toLinkedListsByDepthBFS();
for (var i = 0; i < lists.length; i++) {
  var list = lists[i];
  var str = '';
  while (list) {
    str += list.node.value + ' -> ';
    list = list.next;
  }
  console.log(str);
}
