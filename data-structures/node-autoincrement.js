var Node = function() {
  this.id = Node.prototype.nextId;
  Node.prototype.nextId++;
}

Node.prototype.nextId = 1;

module.exports = Node;
