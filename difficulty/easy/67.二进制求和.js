/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (46.01%)
 * Total Accepted:    16.3K
 * Total Submissions: 35.1K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 
 */
/**
 * @description 常规解法 遍历两个字符串的每一位，将每一位转换成数字进行加法处理，然后再处理进位
 * @summary 21.94% 120ms
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  // NOTE: 通过再次调用函数来 确保输入 a < b
  if (a.length > b.length) {
    return addBinary(b, a);
  }

  var carry = 0; // 进位标志
  var result = '';
  var aNumber; // 存储a字串的每一位
  var bNumber; // 存储b字串的每一位
  var tmp;
  for (var i = b.length - 1, j = a.length - 1; i >= 0; i--, j--) {
    aNumber = a[j] ? +a[j] : 0;
    bNumber = b[i] ? +b[i] : 0;
    tmp = aNumber + bNumber + carry;

    tmp >= 2 ? carry = 1 : carry = 0;
    result = tmp % 2 + result;
  }

  if (carry) {
    result = '1' + result;
  }

  return result;
};

// 测试用例
// console.log(addBinary('11', '1'));
// console.log(addBinary('1010', '1011'));
// console.log(addBinary('0', '0'));
// console.log(addBinary('0', '1'));
