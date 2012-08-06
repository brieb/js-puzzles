#!/usr/local/bin/node

function Node(value) {
  this.value = value;
  this.next = null;
}

function List() {
  this.head = null;
}

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
  // var cur;
  // do {
  //   cur = !cur ? head : cur.next;
  //   if (cur.value === node.value) {
  //     return true;
  //   }
  // } while (cur !== tail);
  // return false;

  var cur = head;
  while (cur !== tail.next) {
    if (cur.value === node.value) {
      return true;
    }
    cur = cur.next;
  }
  return false;
};

var l = new List();

l.add(new Node("567"));
l.add(new Node("567"));
l.add(new Node("234"));
l.add(new Node("123"));
l.add(new Node("234"));
l.add(new Node("234"));
l.add(new Node("234"));
l.add(new Node("234"));
l.add(new Node("234"));
l.add(new Node("234"));

l.print();

console.log("Rem Dup");
l.removeDuplicates();
l.print();

// var n = new Node("abc");
// console.log(n);

