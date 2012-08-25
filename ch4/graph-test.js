var Graph = require('./graph');
var Node = require('../data-structures/node-autoincrement');

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
graph.addEdge([n7, n2]);
graph.print();

var found = graph.existsRouteBetween(n4, n9);
console.log(found);

