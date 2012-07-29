var linkedList = function() {
  var head = null;

  var insert = function(node){
    node.next = head;
    head = node;
  };

  var search = function(key){
    var node = head;
    while (node !== null && node.key !== key){
      node = node.next;
    };
    return node;
  };

  var del = function(node){
    if (node === head){
      head = node.next;
      return;
    }

    var prev = head;
    while (prev.next !== null && prev.next !== node){
      prev = prev.next;
    };

    if (prev !== null){
      prev.next = node.next;
    }
  };

  var getHead = function(){
    return head;
  };

  var reverse = function() {
    var cur, newHead = null;
    while (head) {
      cur = head;
      head = head.next;
      cur.next = newHead;
      newHead = cur;
    }
    head = newHead;
  };

  var getNodeKeys = function() {
    var cur = head;
    var nodeKeys = [];
    while (cur) {
      nodeKeys.push(cur.key);
      cur = cur.next;
    }
    return nodeKeys;
  };

  return {
    insert: insert,
    del: del,
    search: search,
    getHead: getHead,
    reverse: reverse,
    getNodeKeys: getNodeKeys
  };
};

exports.linkedList = linkedList;
