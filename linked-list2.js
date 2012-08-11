#!/usr/local/bin/node

Number.prototype.toInt = function() {
  return this > 0 ? Math.floor(this) : Math.floor(this) + 1;
};

// var _ = require('underscore');

function Node(value) {
  this.value = value;
  this.next = null;
}

function List() {
  this.head = null;
}

// _.extend(List.prototype, {

// });

List.prototype.add = function(node) {
  var oldHead = this.head;
  this.head = node;
  this.head.next = oldHead;
};

List.prototype.print = function() {
  // console.log(this.head);
  var cur = this.head;
  while (cur) {
    console.log(cur.value);
    cur = cur.next;
  }
  console.log();
};

List.prototype.removeDuplicates = function() {
  if (this.head === null) {
    return;
  }

  var tail = this.head;
  while (tail.next) {
    if (List._isBetween(tail.next, this.head, tail)) {
      // Delete node pointed to by tail.next.
      tail.next = tail.next.next;
    } else {
      tail = tail.next;
    }
  }

};

List._isBetween = function(node, head, tail) {
  var cur = head;
  while (cur !== tail.next) {
    if (cur.value === node.value) {
      return true;
    }
    cur = cur.next;
  }
  return false;
};

List.prototype.findNth2 = function(n) {
  var node = null;
  var end = this.head;
  var i = 0;
  while (end) {
    if (i < n) {
      end = end.next;
      i++;
    } else if (i == n) {
      node = this.head;
      end = end.next;
      i++;
    } else {
      node = node.next;
      end = end.next;
      i++;
    }
  }
  return node;
};

List.prototype.findNth = function(n) {
  var node = null;
  var end = this.head;
  var i = 0;
  while (end) {
    if (i == n) {
      node = this.head;
    } else if (node) {
      node = node.next;
    }
    end = end.next;
    i++;
  }
  return node;
};

List.prototype.deleteNode = function(node) {
  var prev;
  var cur = node;
  while (cur.next !== null) {
    cur.value = cur.next.value;
    prev = cur;
    cur = cur.next;
  }
  prev.next = null;
};

List.prototype.deleteNode2 = function(node) {
  if (node === null || node.next === null) {
    console.log("Cannot delete null node or last node.");
    return;
  }

  node.value = node.next.value;
  node.next = node.next.next;
};

var l = new List();

// l.add(new Node("567"));
// l.add(new Node("567"));
// l.add(new Node("234"));
// l.add(new Node("123"));
// l.add(new Node("234"));
// l.add(new Node("234"));
// l.add(new Node("234"));
// l.add(new Node("234"));
// l.add(new Node("234"));
// l.add(new Node("234"));

// l.print();

// console.log("Rem Dup");
// l.removeDuplicates();
// l.print();

// var n = new Node("abc");
// console.log(n);

l.add(new Node("4"));
l.add(new Node("3"));

var n = new Node("2");
l.add(n);

l.add(new Node("1"));
l.add(new Node("0"));

l.print();

l.deleteNode2(n);
l.print();

// console.log("");
// console.log(l.findNth(0).value);
// console.log(l.findNth(1).value);
// console.log(l.findNth(3).value);
// console.log(l.findNth(4));

