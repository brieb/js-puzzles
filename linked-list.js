function Node(value) {
  this._value = value;
  this._next = null;
}

function LinkedList() {
  var _head = null;

  return {
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
    }
  };
};

var ll = new LinkedList();
console.log(ll._head);
