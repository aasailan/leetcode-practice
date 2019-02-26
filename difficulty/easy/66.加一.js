/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (37.27%)
 * Total Accepted:    36.6K
 * Total Submissions: 97.7K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 
 * 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。
 * 
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 * 
 * 
 */
/**
 * @description 遍历数组每一位进行加法，遇到进位特殊处理
 * @summary 109ms
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

  // 加上最后一位，如果不需要进位，则立即返回
  if (digits[digits.length - 1] < 9) {
    digits[digits.length - 1]++;
    return digits
  } 

  // 加上最后一位需要进位
  digits[digits.length - 1] = 0;  
  var carry = true; // 进位标志
  for (var i = digits.length - 2; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
      carry = true;
    } else {
      digits[i]++;
      carry = false;
      break;
    }
  }

  // 连续进位，最后需要在数组开头进位加上一个1
  if (carry) {
    digits.unshift(1);
  }

  return digits;
};

// 测试用例
// console.log(plusOne([4,3,2,1]));
// console.log(plusOne([9]));
// console.log(plusOne([0]));
// console.log(plusOne([9, 9]));
// console.log(plusOne([1, 9, 9]));
