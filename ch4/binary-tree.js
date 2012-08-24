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

  // function print() {
  //   _printHelper([this.root]);
  // }

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

  function createFromSortedArray(sortedArray) {
    this.root = _createFromSortedArray(sortedArray);
  }

  function _createFromSortedArray(sortedArray) {
    if (sortedArray.length === 0) {
      return null;
    }
    if (sortedArray.length === 1) {
      return new Node(sortedArray[0]);
    }

    var mid = Math.floor(sortedArray.length / 2);
    var root = new Node(sortedArray[mid]);
    root.left = _createFromSortedArray(sortedArray.slice(0, mid));
    root.right = _createFromSortedArray(sortedArray.slice(mid+1));
    return root;
  }

  function print() {
    var depth = _getDepth.call(this) + 1;
    var breadth = Math.pow(2, depth) - 1;
    var depthWithBranches = depth * 2 - 1;

    var grid = _initGrid(breadth, depthWithBranches);
    _assignCoordinates(grid, 0, breadth, depthWithBranches - 1, this.root);
    _printGrid.call(this, grid);
  }

  function _getDepth() {
    var maxFromRoot = null;

    var leaves = [];
    _getLeaves(this.root, 0, leaves);

    for (var i = 0; i < leaves.length; i++) {
      var leaf = leaves[i];

      if (maxFromRoot === null || leaf.depth > maxFromRoot) {
        maxFromRoot = leaf.depth;
      }
    }

    return maxFromRoot;
  }

  function _initGrid(maxX, maxY) {
    var grid = [];
    for (var x = 0; x < maxX; x++) {
      grid[x] = [];
      for (var y = 0; y < maxY; y++) {
        grid[x][y] = ' ';
      }
    }
    return grid;
  }

  function _assignCoordinates(grid, minX, maxX, y, root) {
    if (minX === maxX)
      return;

    var midX = Math.floor((maxX + minX)/2);
    grid[midX][y] = root ? root.value : 'X';

    if (y > 0) {
      var q1X = Math.floor((maxX - minX) / 4) + minX;
      var q2X = Math.floor((maxX - minX) * 3/4) + minX;
      var branchLeftX = Math.floor((midX + q1X) / 2);
      var branchRightX = Math.floor((midX + q2X) / 2);
      grid[branchLeftX][y - 1] = '/';
      grid[branchRightX][y - 1] = '\\';
    }

    if (root === null) return;

    _assignCoordinates(grid, minX, midX, y - 2, root.left);
    _assignCoordinates(grid, midX + 1, maxX, y - 2, root.right);
  }

  function _printGrid(grid) {
    var maxNodeValueLength = _getLongestNodeValue(this.root);
    for (var y = grid[0].length - 1; y >= 0; y--) {
      var rowStr = '';
      for (var x = 0; x < grid.length; x++) {
        var cur = grid[x][y];
        var str = '';
        if (typeof cur === 'string') {
          str = cur;
        } else if (typeof cur === 'number') {
          str = cur.toString();
        }

        var padSide = cur === '/' || cur === '\\' ? 'left' : 'both';
        rowStr += _padStr(str, maxNodeValueLength, padSide);
      }
      console.log(rowStr);
    }
  }

  function _getLongestNodeValue(root) {
    if (root === null)
      return 0;

    if (_isLeaf(root))
      return root.value.toString().length;

    return Math.max(
        root.value.toString().length,
        _getLongestNodeValue(root.left),
        _getLongestNodeValue(root.right)
      );
  }

  function _padStr(str, goalLength, side) {
    var lengthDelta = goalLength - str.length;
    var numLeft = 0, numRight = 0;
    var padLeft = '', padRight = '';

    if (side === 'left') {
      numLeft = lengthDelta;
    } else if (side === 'right') {
      numRight = lengthDelta;
    } else {
      numLeft = Math.ceil(lengthDelta/2);
      numRight = Math.floor(lengthDelta/2);
    }

    for (var i = 0; i < numLeft; i++) {
      padLeft += ' ';
    }
    for (var i = 0; i < numRight; i++) {
      padRight += ' ';
    }

    return padLeft + str + padRight;
  }

  function _numLeaves() {
    var leaves = [];
    _getLeaves(this.root, 0, leaves);
    return leaves.length;
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
    isBalanced: isBalanced,
    createFromSortedArray: createFromSortedArray
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

// bt.root = nB;
// bt.insert(nA);
// bt.insert(nD);
// bt.insert(nC);
// bt.insert(nE);
// bt.insert(nF);

// console.log(bt.isBalanced());

bt.createFromSortedArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,11111]);
bt.print();
