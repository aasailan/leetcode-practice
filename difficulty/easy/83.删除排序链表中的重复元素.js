/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (43.44%)
 * Total Accepted:    17.3K
 * Total Submissions: 39.4K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 * 
 * 示例 1:
 * 
 * 输入: 1->1->2
 * 输出: 1->2
 * 
 * 
 * 示例 2:
 * 
 * 输入: 1->1->2->3->3
 * 输出: 1->2->3
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @description 普通解法 通过一个数组记录节点的value，遍历节点时在数组内查询是否为重复节点
 * @summary 31.9ms 112 ms 
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head || !head.next) return head;
  var stack = [head.val];
  var current = head.next;
  var previous = head;
  while(current) {
    if (stack.indexOf(current.val) === -1) {
      stack.push(current.val);
      previous = current;
      current = current.next;
    } else {
      previous.next = current.next;
      current.next = null;
      current = previous.next;
    }
  }
  return head;
};

// 测试用例
// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// function createListByArray(arr) {
//   var head = new ListNode(arr[0]);
//   var previous = head;
//   var current;
//   for (var i = 1; i < arr.length; i++) {
//     current = new ListNode(arr[i]);
//     previous.next = current;
//     previous = current;
//   }
//   return head;
// }

// function logList(head) {
//   var arr = [];
//   while(head) {
//     arr.push(head.val);
//     head = head.next;
//   }
//   console.log(arr.join(' -> '));
// }

// var a = createListByArray([1, 1, 2, 3, 3]);
// logList(a);
// logList(deleteDuplicates(a));

