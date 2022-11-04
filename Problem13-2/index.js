// You are given two non-empty linked lists representing two non-negative integers.
//The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const head = new ListNode(0);
  let currentNode = head;
  let carry = 0;
  while (l1 != null || l2 != null || carry != 0) {
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;
    let sum = x + y + carry;
    currentNode.next = new ListNode(sum % 10);
    currentNode = currentNode.next;
    carry = Math.floor(sum / 10);
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return head.next;
};
