#!/usr/local/bin/node

Number.prototype.toInt = function() {
  return this > 0 ? Math.floor(this) : Math.floor(this) + 1;
};

var Node = function(value) {
  this.value = value;
  this.next = null;
};

var LinkedList = function(){
  this._head = null;
  this._tail = null;
};

LinkedList.prototype = (function() {

  function print() {
    var cur = this._head;
    var str = '';
    while (cur) {
      str += cur.value + ' -> ';
      cur = cur.next;
    }
    str = str.substr(0, str.length - 4);
    console.log(str);
  };

  function add(node) {
    node.next = this._head;
    this._head = node;

    if (this._tail === null) {
      this._tail = node;
    }
  };

  function append(node) {
    if (this._tail === null)
      this._head = node;
    else
      this._tail.next = node;

    this._tail = node;
    // this._tail.next = null;
  };

  function reverse() {
    var cur, newHead = null;
    while (this._head) {
      cur = this._head;
      this._head = this._head.next;
      cur.next = newHead;
      newHead = cur;
    }
    this._head = newHead;
  };

  function removeDuplicates() {
    if (this._head === null)
      return;

    var tail = this._head;
    while (tail.next) {
      if (_isBetween(tail.next, this._head, tail)) {
        // Delete node pointed to by tail.next.
        tail.next = tail.next.next;
      } else {
        tail = tail.next;
      }
    }
  };

  function _isBetween(node, head, tail) {
    var cur = head;
    while (cur !== tail.next) {
      if (cur.value === node.value) {
        return true;
      }
      cur = cur.next;
    }
    return false;
  };

  function getNthToLast(n) {
    if (this._head === null || n < 0)
      return null;

    // Advance end by n
    var end = this._head;
    for (var i = 0; i <= n; i++) {
      if (end === null) {
        return null;
      }
      end = end.next;
    }

    // Advance both node and end together until end reaches the end
    // of the list.
    var node = this._head;
    while (end) {
      node = node.next;
      end = end.next;
    }
    return node;
  }

  function deleteNode(node) {
    if (node === this._tail)
      throw new Error("Can't remove tail node.");

    node.value = node.next.value;
    node.next = node.next.next;
  }

  function getLoopStart() {
    if (this._head === null) return;

    var p1 = this._head;
    var p2 = this._head;


    do {
      // No loop case
      if (p2.next === null || p2.next.next === null)
        return false;

      p1 = p1.next;
      p2 = p2.next.next;
    } while (p1 !== p2);

    p1 = this._head;
    while (p1 !== p2) {
      p1 = p1.next;
      p2 = p2.next;
    }

    return p1;
  };

  function sumWithList(otherList) {
    var list = new LinkedList();
    sumWithListHelper(list, this._head, otherList._head, 0);
    return list;
  };

  function sumWithListHelper(list, node1, node2, carry) {
    if (node1 === null && node2 === null && carry === 0)
      return null;

    var sum = 0;
    sum += node1 ? node1.value : 0;
    sum += node2 ? node2.value : 0;
    sum += carry;

    list.append(new Node(sum % 10));

    sumWithListHelper(
      list,
      node1 ? node1.next : null,
      node2 ? node2.next : null,
      (sum / 10).toInt()
    );
  };

  function sumWithListIter(otherList) {
    var cur1 = this._head;
    var cur2 = otherList._head;
    var list = new LinkedList();
    var sum, carry = 0;

    while (cur1 || cur2 || carry !== 0) {
      sum = 0;
      sum += cur1 ? cur1.value : 0;
      sum += cur2 ? cur2.value : 0;
      sum += carry;

      list.append(new Node(sum % 10));

      cur1 = cur1 ? cur1.next : null;
      cur2 = cur2 ? cur2.next : null;
      carry = (sum / 10).toInt();
    }

    return list;
  }

  return {
    print: print,
    add: add,
    append: append,
    reverse: reverse,
    removeDuplicates: removeDuplicates,
    deleteNode: deleteNode,
    getNthToLast: getNthToLast,
    getLoopStart: getLoopStart,
    sumWithList: sumWithListIter
  };
})();

var l = new LinkedList();
var l2 = new LinkedList();

var n = new Node(3);
l.append(new Node(1));
l.append(new Node(2));
l.append(n);
l.append(new Node(4));
l.append(new Node(5));
l.print();
l.deleteNode(n);
l.print();

// l2.append(new Node(3));
// l2.append(new Node(4));
// l2.append(new Node(5));

// l.sumWithList(l2).print();

// var node = new Node("C");
// l.append(new Node("A"));
// l.append(new Node("B"));
// l.append(node);
// l.append(new Node("D"));
// l.append(new Node("E"));
// l.append(node);

// l.print();

// console.log(l.getLoopStart());

// console.log(l.getNthToLast(0).value);
// console.log(l.getNthToLast(2).value);
// console.log(l.getNthToLast(3));
