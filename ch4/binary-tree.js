function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}


function BinaryTree() {
  this.root = null;
}

BinaryTree.prototype = (function() {
  function setRoot(node) {
    this.root = node;
  }

  function printInOrder() {
    printInOrderHelper(this.root);
  }

  function printInOrderHelper(node) {
    if (node === null) return;
    printInOrderHelper(node.left);
    console.log(node.value);
    printInOrderHelper(node.right);
  }

  function printPreOrder() {
    printPreOrderHelper(this.root);
  }

  function printPreOrderHelper(node) {
    if (node === null) return;
    console.log(node.value);
    printPreOrderHelper(node.left);
    printPreOrderHelper(node.right);
  }

  function printPostOrder() {
    printPostOrderHelper(this.root);
  }

  function printPostOrderHelper(node) {
    if (node === null) return;
    printPostOrderHelper(node.left);
    printPostOrderHelper(node.right);
    console.log(node.value);
  }

  function find(nodeID) {

  }

  function remove(nodeID) {

  }

  function insert(value) {

  }

  return {
    setRoot: setRoot,
    printInOrder: printInOrder,
    printPreOrder: printPreOrder,
    printPostOrder: printPostOrder,
    find: find,
    remove: remove
  };

})();

var bt = new BinaryTree();

var nA = new Node("A");
var nB = new Node("B");
var nC = new Node("C");
var nD = new Node("D");
var nE = new Node("E");
var nF = new Node("F");
var nG = new Node("G");
var nH = new Node("H");

nA.left = nB;
nA.right = nC;
nB.left = nD;
nB.right = nE;
nE.right = nF;
nC.right = nG;
nG.right = nH;

bt.root = nA;

console.log("IN");
bt.printInOrder();
console.log("PRE");
bt.printPreOrder();
console.log("POST");
bt.printPostOrder();
