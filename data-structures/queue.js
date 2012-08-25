var Queue = function() {
  this.head = null;
  this.tail = null;
};

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

module.exports = Queue;
