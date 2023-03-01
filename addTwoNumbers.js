/*
  You are given two non-empty linked lists representing two non-negative integers.
  The digits are stored in reverse order, and each of their nodes contains a single digit.
  dd the two numbers and return the sum as a linked list.

  You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Solution
const addTwoNumbers = function (l1, l2) {
  const List = new ListNode(0);
  let head = List;
  let sum = 0;
  let carry = 0;
  while (l1 !== null || l2 !== null || sum) {
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }

    head.val = sum;

    // if list not exhausted, create a new node
    if (l1 !== null || l2 !== null || carry) {
      head.next = new ListNode(0);
      head = head.next;
    }

    sum = carry;
    carry = 0;
  }
  return List;
};

// helper functions

// array to linked list
function arrToLinkedList(arr) {
  let linkedList = new ListNode(arr[0]);
  let head = linkedList;
  for (let i = 1; i < arr.length; i++) {
    head.next = new ListNode(arr[i]);
    head = head.next;
  }
  return linkedList;
}

const list1 = arrToLinkedList([2, 4, 3]);
const list2 = arrToLinkedList([5, 6, 4]);

console.log(list1, list2);
console.log();
console.log(addTwoNumbers(list1, list2));
