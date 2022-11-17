class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // =========== push ==============
  push(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
  // ============ unshift ============
  unshift(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      let oldHead = this.head;
      this.head = node;
      node.next = oldHead;
    }
    this.length++;
  }
  // =========== pop ==============

  // 0,1,2,3,4,5,6
  pop() {
    if (this.head === null) return;
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }
    let currentNode = this.head;
    let previousNode = currentNode;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = previousNode;
    this.tail.next = null;
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
      this.tail = null;
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
    if (index > this.length - 1 || index < 0) return "Action Cant Performed";
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
      let nextNode = previousNode.next;
      previousNode.next = nextNode.next;
      this.length--;
    }
  }

  set(index, value) {
    if (index > this.length - 1 || index < 0) return;
    let node = this.get(index);
    node.value = value;
  }

  reverse() {
    // In order to Reverse the linked list create a node variable and store the reference of the head,
    // Directly point the head to tail and the tail to the head,
    // Create two variables next and prev, the next variable always store the reference of the node.next i.e head.next
    // Initialize the previous variable first null, and then point the
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let previous = null;
    let next;

    while (node) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }
  }

  reverseFromMN(linkedList, m, n) {
    let currentPosition = 1;
    let currentNode = linkedList;
    let start = linkedList;

    while (currentPosition < m) {
      start = currentNode;
      currentNode = currentNode.next;
      currentPosition++;
    }

    let newList = null;
    let tail = currentNode;

    while (currentPosition >= m && currentPosition <= n) {
      const next = currentNode.next;
      currentNode.next = newList;
      newList = currentNode;
      currentNode = next;
      currentPosition++;
    }
    start.next = newList;
    tail.next = currentNode;
    if (m > 1) {
      return linkedList;
    } else {
      return newList;
    }
  }
}

// 1,2,3,4,5,6
const linkedList = new LinkedList();

linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
linkedList.push(6);

// linkedList.reverseMN(2, 4);
console.log(linkedList.reverseFromMN(linkedList.head, 2, 4));

// Wrong Implementation

// reverseMN(m, n) {
//   let mthNode = this.head;
//   for (let i = 1; i < m; i++) {
//     mthNode = mthNode.next;
//   }
//   let mthListNext;
//   let mthListPrevious = mthNode;

//   while (m <= n) {
//     mthListNext = mthNode.next;
//     mthNode.next = mthListPrevious;
//     mthListPrevious = mthNode;
//     n--;
//   }
//   this.head = mthNode;
// }

// reverseMN(m, n) {
//   let node = this.get(m - 1);
//   let next;
//   let prev;

//   for (let i = m; i < n; i++) {
//     next = node.next;
//     prev = node;
//     node.next = prev;
//     node = next;
//   }
//   this.head.next = node;
// }

// reverseBetween(list, left, right) {
//   let reversedLeft;
//   let l = 1;
//   let oldHead = list.head;
//   let start = oldHead;
//   while (l < left) {
//     start = start.next;
//     l++;
//   }
//   let r = 1;
//   let end = oldHead;
//   while (r < right) {
//     end = end.next;
//     right++;
//   }

//   reversedLeft = start;

//   let reversedNext;
//   let reversedPrev = null;

//   for (let i = 0; i <= right - left; i++) {
//     reversedNext = reversedLeft.next;
//     reversedLeft.next = reversedPrev;
//     reversedPrev = reversedLeft;
//     reversedLeft = reversedNext;
//   }

//   this.head.next = reversedPrev;
// }
