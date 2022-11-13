class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // =========== push ==============
  push(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;

      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.length++;
  }
  // ============ unshift ============
  unshift(value) {
    let oldHead = this.head;
    let node = new Node(value);
    this.head = node;
    node.next = oldHead;
  }
  // =========== pop ==============

  // 0,1,2,3,4,5,6
  pop() {
    if (this.head === null) return;
    if (this.head.next === null) {
      this.head = null;
      this.length = 0;
      return;
    }
    let currentNode = this.head;
    let previousNode = currentNode;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = null;
    this.length--;
  }
  // ============ shift ============
  shift() {
    if (this.head === null) {
      return;
    }
    if (this.head.next === null) {
      this.length = 0;
      this.head = null;
      return;
    }
    let oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
  }
  // ============= Get ==============
  get(index) {
    let count = 0;
    let currentNode = this.head;
    if (index > this.length - 1) return "Action Cant Performed";
    while (count !== index && count < this.length) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }
  // =============Print ===========
  print() {
    let arr = [];
    let currentNode = this.head;

    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
  // ===========insert At Index ===========
  insertAt(index, value) {
    if (index === 0) this.unshift(value);
    else if (index === this.length - 1) this.push(value);
    else {
      const node = new Node(value);
      let previousNode = this.get(index - 1);
      let nextNode = previousNode.next;
      previousNode.next = node;
      node.next = nextNode;
      this.length++;
    }
  }
  // ===========Delete At Index ===========
  deleteAt(index) {
    if (index < 0 || index > this.length) return;
    if (index === 0) this.shift();
    else if (index === this.length - 1) this.pop();
    else {
      let previousNode = this.get(index - 1);
      let nextNode = this.get(index);
      previousNode.next = nextNode.next;
      this.length--;
    }
  }

  set(index, value) {
    if (index > this.length - 1 || index < 0) return;
    let node = this.get(index);
    node.value = value;
  }
}

const linkedList = new LinkedList();

linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
linkedList.push(6);
linkedList.set(0, 0.5);
linkedList.set(1, 1.5);
linkedList.set(2, 2.5);
linkedList.set(3, 3.5);
linkedList.set(4, 4.5);
linkedList.set(5, 6.5);
linkedList.set(6, 6.5);

console.log(linkedList.print());
