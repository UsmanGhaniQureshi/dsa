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
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      newNode.prev = currentNode;
      currentNode = newNode;
    }
    this.length++;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return;
    if (this.length === 1) {
      this.head = null;
    } else {
      let currentNode = this.head;
      let preNode = currentNode;

      while (currentNode.next !== null) {
        preNode = currentNode;
        currentNode = currentNode.next;
      }
      currentNode.prev = null;
      preNode.next = null;
    }
    this.length--;
  }
  shift() {
    if (!this.head) return;
    if (this.length === 1) {
      this.head = null;
    } else {
      let oldHead = this.head;
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.prev = null;
    }
    this.length--;
  }
  print() {
    let result = [];
    if (!this.head) return result;
    let currentNode = this.head;
    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return result;
  }

  get(index) {
    if (index < 1 || index > this.length) return "Action cant be Performed";
    if (index === 1) {
      return this.head;
    }
    let count = 1;
    let node = this.head;
    while (count < index) {
      node = node.next;
      count++;
    }
    return node;
  }

  set(index, val) {
    let node = this.get(index);
    node.value = val;
    return this;
  }

  insertAt(index, value) {
    if (index < 1 || index > this.length) return;
    else if (index === 1) this.unshift(value);
    else if (index === this.length) this.push(value);
    else {
      const newNode = new Node(value);
      const node = this.get(index - 1);
      newNode.next = node.next;
      node.next = newNode;
      newNode.prev = node;
      this.length++;
    }
  }
  deleteAt(index) {
    if (index < 1 || index > this.length) return;
    else if (index === 1) this.shift();
    else if (index === this.length) this.pop();
    else {
      let node = this.get(index - 1);
      let deletedNode = node.next;
      node.next = deletedNode.next;
      deletedNode.prev = node;
      this.length--;
    }
    return this;
  }
}

// 1,2,3,4,5,6,7

const DLL = new DoublyLinkedList();
DLL.push(1);
DLL.push(2);
DLL.push(3);
DLL.push(4);
DLL.push(5);

console.log(DLL);

console.log(DLL.print());
