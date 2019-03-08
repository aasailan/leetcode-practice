/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 *
 * https://leetcode-cn.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (34.24%)
 * Total Accepted:    23.3K
 * Total Submissions: 67.5K
 * Testcase Example:  '4'
 *
 * 实现 int sqrt(int x) 函数。
 * 
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 * 
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 * 
 * 示例 1:
 * 
 * 输入: 4
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: 8
 * 输出: 2
 * 说明: 8 的平方根是 2.82842..., 
 * 由于返回类型是整数，小数部分将被舍去。
 * 
 * 
 */
/**
 * @description 暴力解法 从0^2开始尝试，找到第一个小于x的平方数即可
 * @summary 6.76% 244ms
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function(x) {
//   var i = 0;
//   while(true) {
//     if (Math.pow(i, 2) > x)
//       return i - 1;
//     i++;
//   }
// };

/**
 * @description 二分法：js数字是64位（1位符号位，11位指数，52位尾数）。最大安全正整数是 2^53 - 1，开根后是取地板数是 94906265。所以在 94906265 和 0 之间用二分法进行查找
 *  时间复杂度：O(log2n) NOTE: 关于js number的解释：https://www.jianshu.com/p/61847f310052
 * @summary 46.94% 120ms
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function(x) {
//   var mid;
//   var start = 0;
//   var end = 94906265;
//   var startSquare;
//   var endSquare;
//   while(true) {
//     if (end < start) {
//       break;
//     }
//     mid = Math.floor((start + end) / 2);
//     startSquare = Math.pow(mid, 2);
//     endSquare = Math.pow(mid + 1, 2);
//     if (startSquare <= x && x < endSquare) {
//       return mid;
//     }
//     if (startSquare < x) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }

//   return start;
// };

/**
 * @description TODO: 牛顿迭代法（没看懂） https://en.wikipedia.org/wiki/Integer_square_root#Using_only_integer_division
 * @summary 46.94% 120ms
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x <= 1) return x;
  var r = x;
  while (r > x / r) {
    r = Math.floor((r + x / r) / 2);
  }
  return Math.floor(r);
};

// 测试用例
// console.log(mySqrt(4));
// console.log(mySqrt(8));
// console.log(mySqrt(0));
// console.log(mySqrt(1));


