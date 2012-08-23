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
    _printInOrderHelper(this.root);
  }

  function _printInOrderHelper(node) {
    if (node === null) return;
    _printInOrderHelper(node.left);
    console.log(node.value);
    _printInOrderHelper(node.right);
  }

  function printPreOrder() {
    _printPreOrderHelper(this.root);
  }

  function _printPreOrderHelper(node) {
    if (node === null) return;
    console.log(node.value);
    _printPreOrderHelper(node.left);
    _printPreOrderHelper(node.right);
  }

  function printPostOrder() {
    _printPostOrderHelper(this.root);
  }

  function _printPostOrderHelper(node) {
    if (node === null) return;
    _printPostOrderHelper(node.left);
    _printPostOrderHelper(node.right);
    console.log(node.value);
  }

  function print() {
    _printHelper([this.root]);
  }

  function _printHelper(nodes) {
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
    _printHelper(newNodes);
  }

  function find(nodeID) {

  }

  function remove(nodeID) {

  }

  function insert(node) {
    if (this.root === null)
      this.root = node;
    else
      _insertHelper(node, this.root);
  }

  function _insertHelper(node, root) {
    if (node.value < root.value) {
      if (root.left === null)
        root.left = node;
      else
        _insertHelper(node, root.left);
    } else if (node.value > root.value) {
      if (root.right === null)
        root.right = node;
      else
        _insertHelper(node, root.right);
    }

  }

  function isBalanced() {
    var minFromRoot = null;
    var maxFromRoot = null;

    var leaves = [];
    _getLeaves(this.root, 0, leaves);

    for (var i = 0; i < leaves.length; i++) {
      var leaf = leaves[i];

      if (minFromRoot === null || leaf.depth < minFromRoot) {
        minFromRoot = leaf.depth;
      }
      if (maxFromRoot === null || leaf.depth > maxFromRoot) {
        maxFromRoot = leaf.depth;
      }

      if (maxFromRoot - minFromRoot > 1) {
        return false;
      }
    }
    return true;
  }

  function _getLeaves(root, depth, leaves) {
    if (root === null) return;

    if (_isLeaf(root)) {
      leaves.push({ node: root, depth: depth });
      return;
    }

    _getLeaves(root.left, depth + 1, leaves);
    _getLeaves(root.right, depth + 1, leaves);
  }

  function _isLeaf(node) {
    return node.left === null && node.right === null;
  }

  return {
    setRoot: setRoot,
    print: print,
    printInOrder: printInOrder,
    printPreOrder: printPreOrder,
    printPostOrder: printPostOrder,
    find: find,
    remove: remove,
    insert: insert,
    isBalanced: isBalanced
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

bt.root = nB;
bt.insert(nA);
bt.insert(nD);
bt.insert(nC);
bt.insert(nE);
bt.insert(nF);

console.log(bt.isBalanced());
