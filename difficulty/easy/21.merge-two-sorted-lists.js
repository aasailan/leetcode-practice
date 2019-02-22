/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (52.11%)
 * Total Accepted:    42.2K
 * Total Submissions: 80.8K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
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
 * @description 依次对比两个链条节点
 * @summary 11.50% 152 ms
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var mergeTwoLists = function(l1, l2) {
//   var result;
//   var l1Node;
//   var l2Node;
//   var nextNode;

//   // 排除特殊情况
//   if (!l1 && l2) {
//     return l2;
//   } else if (!l2 && l1) {
//     return l1;
//   } else if (!l1 && !l2) {
//     // NOTE: 这里很奇怪，leetCode如果输入l1跟l2都不输入，只能返回l1或者l2，才对
//     return l1;
//   }

//   // 获取头部
//   l1Node = l1;
//   l2Node = l2;
//   if (l1Node.val < l2Node.val) {
//     result = l1Node;
//     l1Node = l1Node.next;
//   } else {
//     result = l2Node;
//     l2Node = l2Node.next;
//   }
//   nextNode = result;

//   // 对比两链条中间节点
//   while(l1Node && l2Node) {
//     if (l1Node.val < l2Node.val) {
//       nextNode.next = l1Node;
//       l1Node = l1Node.next;
//     } else {
//       nextNode.next = l2Node;
//       l2Node = l2Node.next;
//     }
//     nextNode = nextNode.next;
//   }

//   // 获取剩余尾部
//   if (!l1Node && l2Node) {
//     nextNode.next = l2Node;
//   } else if (!l2Node && l1Node) {
//     nextNode.next = l1Node;
//   }
//   return result;
// };

/**
 * @description 依次对比两个链条节点，头部利用哨兵节点来简化代码 
 * NOTE: 遇到链表问题的时候，一定要考虑哨兵节点的使用
 * @summary 53.06% 100 ms
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var result;
  var l1Node;
  var l2Node;
  var nextNode;

  // 排除特殊情况
  if (!l1) return l2;
  if (!l2) return l1; 
  
  // 定义哨兵节点
  result = {
    val: 0,
    next: null,
  };
  nextNode = result;
  l1Node = l1;
  l2Node = l2;

  // 对比两链条中间节点
  while(l1Node && l2Node) {
    if (l1Node.val < l2Node.val) {
      nextNode.next = l1Node;
      l1Node = l1Node.next;
    } else {
      nextNode.next = l2Node;
      l2Node = l2Node.next;
    }
    nextNode = nextNode.next;
  }

  // 获取剩余尾部
  if (!l1Node && l2Node) {
    nextNode.next = l2Node;
  } else if (!l2Node && l1Node) {
    nextNode.next = l1Node;
  }
  return result.next;
};

// 以下是测试用例
// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// function createListByArray(arr) {
//   var head = new ListNode(arr[0]);
//   var nextNode = head;
//   for(var i = 1; i < arr.length; i++) {
//     nextNode.next = new ListNode(arr[i]);
//     nextNode = nextNode.next;
//   }
//   return head;
// }

// function showList(list) {
//   var node = list;
//   var values = [];
//   while(node) {
//     values.push(node.val);
//     node = node.next;
//   }
//   console.log(values.join(' - '));
// }

// var l1 = createListByArray([1, 2, 5, 8]);
// var l2 = createListByArray([3, 4, 9]);

// showList(l1);
// showList(l2);

// var l3 = mergeTwoLists(l1, l2);
// showList(l3);



