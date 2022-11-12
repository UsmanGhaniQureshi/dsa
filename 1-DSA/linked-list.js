// Linked List => Two Parts  First value=> contain value, secondPart Reference of the next Node

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert or Push
  // Add a New Node at the end of the list
  insert(value) {
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
  }
  // Print All the node
  print() {
    let arr = [];
    let currentNode = this.head;
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
  // Print total Length
  length() {
    let counter = 0;
    let currentNode = this.head;
    while (currentNode) {
      counter++;
      currentNode = currentNode.next;
    }
    return counter;
  }

  // Add  A new Node at the start of the linked list, this can simply done by checking head first is null or not if null then it become the first node,
  // but if contains node so first we have to store the reference of the old head, then point new node to head => this.head = newNode; to join the newNode with
  // the old is by pointing the reference of newly created node to old head.
  unshift(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
    } else {
      let oldHead = this.head;
      this.head = node;
      node.next = oldHead;
    }
  }
}

const linkedList = new LinkedList();
linkedList.unshift(5);
linkedList.unshift(4);
linkedList.unshift(3);
linkedList.unshift(2);
linkedList.unshift(1);

console.log(linkedList.print());
