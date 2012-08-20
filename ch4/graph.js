function Queue() {
  this.head = null;
  this.tail = null;
}

Queue.prototype = (function() {
  function enqueue(elem) {
    var prevTail = this.tail;
    this.tail = { elem: elem, next: null };
    if (prevTail) prevTail.next = this.tail;
    if (!this.head) this.head = this.tail;
  }

  function dequeue() {
    var node = this.head;
    if (this.head) this.head = this.head.next;
    return node.elem;
  }

  function isEmpty() {
    return this.head === null;
  }

  return {
    enqueue: enqueue,
    dequeue: dequeue,
    isEmpty: isEmpty
  };
})();

function Node() {
  this.id = Node.prototype.nextId;
  Node.prototype.nextId++;
}

Node.prototype.nextId = 1;

function Graph() {
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
    var visited = {};
    var queue = new Queue();
    queue.enqueue(this.root);
    visited[this.root.id] = true;

    while (!queue.isEmpty()) {
      var cur = queue.dequeue();
      if (cur.id === nodeID) return cur;
      for (var i=0; i < this.adjList[cur.id].length; i++) {
        var child = this.adjList[cur.id][i];
        if (!visited[child.id]) {
          queue.enqueue(child);
          visited[child.id] = true;
        }
      }
    }

    return null;
  }

  return {
    addEdge: addEdge,
    print: print,
    dfs: dfs,
    bfs: bfs
  };
})();

var graph = new Graph();
var n1 = new Node();
var n2 = new Node();
var n3 = new Node();
var n4 = new Node();
var n5 = new Node();
var n6 = new Node();
var n7 = new Node();
var n8 = new Node();
var n9 = new Node();
graph.addEdge([n1, n2]);
graph.addEdge([n2, n3]);
graph.addEdge([n2, n4]);
graph.addEdge([n1, n5]);
graph.addEdge([n5, n6]);
graph.addEdge([n6, n7]);
graph.addEdge([n3, n8]);
graph.addEdge([n3, n9]);
graph.print();

var found = graph.bfs(8);
console.log(found);
