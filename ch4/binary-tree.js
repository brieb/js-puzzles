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

  function print() {
    printHelper([this.root]);
  }

  function printHelper(nodes) {
    var hasNode = false;
    var values = [];
    var realNodes = [];
    for (var i=0; i < nodes.length; i++) {
      var node = nodes[i];
      if (typeof node === 'string') {
        values.push(node);
      } else {
        values.push(node.value);
        hasNode = true;
        realNodes.push(node);
      }
    };
    console.log(values);

    if (!hasNode) return;

    var newNodes = [];
    for (var i=0; i < realNodes.length; i++) {
      var node = realNodes[i];
      if (node.left) {
        newNodes.push(node.left);
        newNodes.push('/');
      }
      if (node.right) {
        newNodes.push("\\");
        newNodes.push(node.right);
      }
      if (i !== realNodes.length - 1) {
        newNodes.push(' ');
      }
    };
    printHelper(newNodes);
  }

  function find(nodeID) {

  }

  function remove(nodeID) {

  }

  function insert(node) {
    if (this.root === null)
      this.root = node;
    else
      insertHelper(node, this.root);
  }

  function insertHelper(node, root) {
    if (node.value < root.value) {
      if (root.left === null)
        root.left = node;
      else
        insertHelper(node, root.left);
    } else if (node.value > root.value) {
      if (root.right === null)
        root.right = node;
      else
        insertHelper(node, root.right);
    }

  }

  return {
    setRoot: setRoot,
    print: print,
    printInOrder: printInOrder,
    printPreOrder: printPreOrder,
    printPostOrder: printPostOrder,
    find: find,
    remove: remove,
    insert: insert
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

// nA.left = nB;
// nA.right = nC;
// nB.left = nD;
// nB.right = nE;
// nE.right = nF;
// nC.right = nG;
// nG.right = nH;

bt.root = nE;
bt.insert(nB);
bt.insert(nG);
bt.insert(nA);
bt.insert(nC);
bt.insert(nH);

bt.print();
