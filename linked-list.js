var _ = require("underscore");

function Node(value) {
  this._value = value;
  this._next = null;
}

function LinkedList() { }
LinkedList.prototype = (function() {
  var _head = null;
  var obj = {};

  return {
    foo: function() {
      console.log("foo");
    },
    add: function(node) {
      node.next = _head;
      _head = node;
    },
    reverse: function() {
      var cur, newHead = null;
      while (_head) {
        cur = _head;
        _head = _head.next;
        cur.next = newHead;
        newHead = cur;
      }
      _head = newHead;
    },
    getHead: function() {
      return _head;
    },
    getObj: function() {
      return _.clone(obj);
    }
  };
}());

var ll = new LinkedList();
ll.foo();
console.log(ll._head);
var o = ll.getObj();
console.log(o);
o.test = "123";
console.log(ll.getObj());
