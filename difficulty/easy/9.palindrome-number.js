/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (55.96%)
 * Total Accepted:    67.8K
 * Total Submissions: 121.1K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 示例 1:
 * 
 * 输入: 121
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 
 * 示例 3:
 * 
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 * 
 * 
 * 进阶:
 * 
 * 你能不将整数转为字符串来解决这个问题吗？
 * 
 */
/**
 * @description 通过获取每位数字，然后进行头尾对比得出结果
 * @summary 14.02% 528 ms
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0 || (x > 0 && x % 10 === 0)) return false;
  // 将数字转换为字符串来获取数字位数，不符合要求
  var length = x.toString().length;
  var head, tail;
  for (var i = 1; i < length; i++, length--) {
    head = Math.floor(x / Math.pow(10, length-1)) % 10;
    tail = Math.floor(x / Math.pow(10, i - 1)) % 10;
    if (head !== tail) {
      return false;
    }
  }
  return true;
};

/**
 * @description 官方答案：反转后面一半数字然后与前面一半进行对比。关键在于判断什么时候反转到一半。
 * @summary  7.38% 616 ms
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0 || (x > 0 && x % 10 === 0)) return false;
  var lastNumber;
  var reverseNumber = 0;
  while (x > reverseNumber) {
    lastNumber = x % 10;
    reverseNumber = reverseNumber * 10 + lastNumber;
    x = (x - lastNumber) / 10;
  }
  return x === reverseNumber || x === Math.floor(reverseNumber/10);
};
