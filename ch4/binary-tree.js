var Queue = require('../data-structures/queue');
var Node = require('./binary-tree-node');

var BinaryTree = function() {
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
    if (root.left) {
      root.left.parent = root;
    }
    if (root.right) {
      root.right.parent = root;
    }
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

  function toLinkedListsByDepth() {
    var lists = [];
    _toLinkedListsByDepth(lists, 0, this.root);
    return lists;
  }

  function _toLinkedListsByDepth(lists, depth, root) {
    if (root === null)
      return;

    _appendToList(lists, depth, root);
    _toLinkedListsByDepth(lists, depth + 1, root.left);
    _toLinkedListsByDepth(lists, depth + 1, root.right);
  }

  function _appendToList(lists, index, node) {
    lists[index] = {
      node: node,
      next: lists[index] || null
    };
  }

  function toLinkedListsByDepthBFS() {
    var depth = 0;
    var linkedLists = [];
    var queue = new Queue();
    queue.enqueue(depth);
    queue.enqueue(this.root);

    while (!queue.isEmpty()) {
      var cur = queue.dequeue();
      if (typeof cur === 'number') {
        depth = cur;
      } else if (cur !== null) {
        linkedLists[depth] = {
          node: cur,
          next: linkedLists[depth] || null
        };

        queue.enqueue(depth + 1);
        queue.enqueue(cur.left);
        queue.enqueue(cur.right);
      }
    }

    return linkedLists;
  }

  function getInOrderSuccessor(node) {
    if (node.right === null) {
      if (node.parent === null) {
        return null;
      } else if (node.parent.left === node) {
        return node.parent;
      } else if (node.parent.right === node) {
        return _getRightChildsParentLeft(node);
      }
    } else {
      return _getLeftmostNode(node.right);
    }
  }

  function _getRightChildsParentLeft(node) {
    var cur = node.parent;
    var curParent = node.parent.parent;
    while (curParent && curParent.left !== cur) {
      curParent = curParent.parent;
      cur = cur.parent;
    }
    return curParent;
  }

  function _getLeftmostNode(node) {
    var cur = node;
    while (cur.left !== null) {
      cur = cur.left;
    }
    return cur;
  }

  function findCommonAncestor(node1, node2) {
    var path1 = [], path2 = [];
    _pathToNode(node1, this.root, path1);
    _pathToNode(node2, this.root, path2);

    var minLength = Math.min(path1.length, path2.length);
    path1 = path1.slice(0, minLength);
    path2 = path2.slice(0, minLength);

    while (path1.length > 0 && path2.length > 0) {
      var cur1 = path1.pop();
      var cur2 = path2.pop();
      if (cur1 === cur2) {
        return cur1;
      }
    }
    return null;
  }

  function _pathToNode(node, root, path) {
    if (root === null) return false;
    if (root === node) return true;

    path.push(root);
    var found = _pathToNode(node, root.left, path);
    found = found || _pathToNode(node, root.right, path);
    if (!found) {
      path.pop();
    }

    return found;
  }

  function findAllPathsWithSum(sum) {
    var paths = [];
    _findAllPaths(this.root, [ this.root ], paths);

    var sumPaths = [];
    for (var i = 0; i < paths.length; i++) {
      var path = paths[i];
      var pathSum = 0;
      for (var j = path.length - 1; j >= 0; j--) {
        pathSum += path[j].value;
        if (pathSum === sum) {
          sumPaths.push(path.slice(j));
        }
      }
    }
    return sumPaths;
  }

  function _findAllPaths(root, path, paths) {
    if (root === null) return;

    paths.push(path);

    if (root.left !== null) {
      var pathLeft = path.slice(0);
      pathLeft.push(root.left);
      _findAllPaths(root.left, pathLeft, paths);
    }
    if (root.right !== null) {
      var pathRight = path.slice(0);
      pathRight.push(root.right);
      _findAllPaths(root.right, pathRight, paths);
    }
  }

  function _printPathValues(path) {
    var str = '[';
    for (var i = 0; i < path.length; i++) {
      var node = path[i];
      str += node.value + ' ->';
    }
    str += ']';
    console.log(str);
  }

  function containsTree(tree) {
    if (tree === null) return true;
    return _containsTree(this.root, tree.root);
  }

  function _containsTree(root1, root2) {
    if (root1 === null) return false;
    if (root1.value === root2.value && _isTreeMatch(root1, root2)) return true;
    return _containsTree(root1.left, root2) || _containsTree(root1.right, root2);
  }

  function _isTreeMatch(root1, root2) {
    if (root1 === null && root2 === null) return true;
    if (root1 === null || root2 === null) return false;
    return root1.value === root2.value &&
      _isTreeMatch(root1.left, root2.left) &&
      _isTreeMatch(root1.right, root2.right);
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
    createFromSortedArray: createFromSortedArray,
    toLinkedListsByDepth: toLinkedListsByDepth,
    toLinkedListsByDepthBFS: toLinkedListsByDepthBFS,
    getInOrderSuccessor: getInOrderSuccessor,
    findCommonAncestor: findCommonAncestor,
    findAllPathsWithSum: findAllPathsWithSum,
    containsTree: containsTree
  };

})();

module.exports = BinaryTree;

