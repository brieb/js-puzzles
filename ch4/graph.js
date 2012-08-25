var Queue = require('../data-structures/queue');

var Graph = function() {
  this.root = null;
  this.adjList = {};
}

Graph.prototype = (function() {
  function addEdge(edge) {
    this.adjList[edge[0].id] = this.adjList[edge[0].id] || [];
    this.adjList[edge[1].id] = this.adjList[edge[1].id] || [];
    this.adjList[edge[0].id].push(edge[1]);
    if (!this.root) this.root = edge[0];
  }

  function print() {
    console.log(this.adjList);
  }

  function dfs(nodeID) {
    return dfsHelper.call(this, nodeID, this.root, {});
  }

  function dfsHelper(nodeID, root, visited) {
    if (nodeID === root.id) return root;
    visited[root.id] = true;
    for (var i=0; i < this.adjList[root.id].length; i++) {
      if (visited[this.adjList[root.id][i].id]) continue;
      var found = dfsHelper.call(this, nodeID, this.adjList[root.id][i], visited);
      if (found) return found;
    }
    return null;
  }

  function bfs(nodeID) {
    return _bfsHelper.call(this, this.root, nodeID);
  }

  function _bfsHelper(root, nodeID) {
    var visited = {};
    var queue = new Queue();
    queue.enqueue(root);
    visited[root.id] = true;

    while (!queue.isEmpty()) {
      var cur = queue.dequeue();

      if (cur.id === nodeID) {
        return cur;
      }

      for (var i = 0; i < this.adjList[cur.id].length; i++) {
        var child = this.adjList[cur.id][i];
        if (!visited[child.id]) {
          queue.enqueue(child);
          visited[child.id] = true;
        }
      }
    }

    return null;
  }

  function existsRouteBetween(node1, node2) {
    return _bfsHelper.call(this, node1, node2.id) !== null;
  }

  return {
    addEdge: addEdge,
    print: print,
    dfs: dfs,
    bfs: bfs,
    existsRouteBetween: existsRouteBetween
  };
})();

module.exports = Graph;

