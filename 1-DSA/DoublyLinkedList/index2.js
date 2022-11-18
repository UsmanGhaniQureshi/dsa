class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const oldTail = this.tail;
      oldTail.next = newNode;
      newNode.prev = oldTail;
      this.tail = newNode;
    }
    this.length++;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const oldHead = this.head;
      this.head = newNode;
      newNode.next = oldHead;
      oldHead.prev = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let oldTail = this.tail;
      this.tail = oldTail.prev;
      oldTail.prev = null;
      this.tail.next = null;
    }
  }

  get(index) {
    if (index < 1 || index > this.length) return;
    else if (index === 1) {
      return this.head;
    } else {
      let count = 1;
      let currentNode = this.head;

      while (count < index) {
        currentNode = currentNode.next;
        count++;
      }
      return currentNode;
    }
  }
  set(index, val) {
    if (index < 1 || index > this.length) return;
    const node = this.get(index);
    node.value = val;
    return this;
  }
  print() {
    let result = [];
    if (!this.head) return result;
    let node = this.head;
    while (node) {
      result.push(node.value);
      node = node.next;
    }
    return result;
  }
  printT() {
    let result = [];
    if (!this.tail) return result;
    let node = this.tail;
    while (node) {
      result.push(node.value);
      node = node.prev;
    }
    return result;
  }

  deleteAt(index) {
    if (index < 1 || index > this.length) return;
    if (index === 1) {
      this.head = null;
      this.tail = null;
    } else if (index === this.length) this.pop;
    else {
      const beforeNode = this.get(index - 1);
      const nextNode = beforeNode.next;
      beforeNode.next = nextNode.next;
      nextNode.prev = beforeNode;
    }
    this.length--;
  }
  insertAt(index, val) {
    if (index < 1 || index > this.length) return;
    else if (index === this.length) this.push(val);
    else if (index === 1) this.unshift(val);
    else {
      const newNode = new Node(val);
      const beforeNode = this.get(index - 1);
      const nextNode = beforeNode.next;
      beforeNode.next = newNode;
      newNode.next = nextNode;
      nextNode.prev = newNode;
      this.length++;
    }
  }
}

// 1,2,3,4,5

const DLL = new DoublyLinkedList();
DLL.unshift(1);
DLL.unshift(2);
DLL.unshift(3);
DLL.unshift(4);
DLL.unshift(5);
DLL.insertAt(3, "ADDED");
console.log(DLL.print());
