/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (31.39%)
 * Total Accepted:    78.7K
 * Total Submissions: 250.7K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 * 
 */
// 所有 JavaScript 数字均为 64 位
/**
 * @description 先将数字转换为字符串，然后反转 5.14% 216 ms
 * @param {number} x
 * @return {number}
 */
// var reverse = function(x) {
//   var str = Math.abs(x) + '';
//   var result = x < 0 ? '-' : '';
//   for (var i = str.length - 1; i >= 0; i--) {
//     result = result + str[i];
//   }
//   result = +result;
//   var max = Math.pow(2, 31);
  // if (result < -max || result > max - 1) {
  //   return 0;
  // } 
  // return result;
// };

/**
 * @description 获取每一位的数字，然后通过数组调转 7.15% 192 ms
 * @param {number} x
 * @return {number}
 */
// var reverse = function(x) {
//   var arr = [];
//   var result = x < 0 ? -1 : 1;
//   var lastNumber;
//   x = result * x;
//   while(true) {
//     lastNumber = x % 10;
//     arr.push(lastNumber);
//     x = (x - lastNumber) / 10;
//     if (x <= 0) {
//       break;
//     }
//   }
//   result = result * (+arr.join(''));
//   var max = Math.pow(2, 31);
//     if (result < -max || result > max - 1) {
//     return 0;
//   } 
//   return result;
// }

/**
 * @description 获取每一位的数字，然后通过数字计算 51.59% 116ms 时间复杂度 O(lgX) X中有log10X位数字
 * @note 通过与上面例子的对比，说明数组方法的开销比数字计算要大得多
 * @param {number} x
 * @return {number}
 */
// var reverse = function(x) {
//   var sign = x < 0 ? -1 : 1;
//   var lastNumber;
//   x = sign * x;
//   var length = x.toString().length - 1;
//   // 预先判断溢出
//   if (length > 10 || (length === 10 && x % 10 > 2)) {
//     return 0;
//   }
//   var result = 0;
//   while(true) {
//     lastNumber = x % 10;
//     result = result + lastNumber * Math.pow(10, length--);
//     x = (x - lastNumber) / 10;
//     if (x <= 0) {
//       break;
//     }
//   }
//   result = result * sign;
//   var max = Math.pow(2, 31);
//     if (result < -max || result > max - 1) {
//     return 0;
//   } 
//   return result;
// }


/**
 * @description 官方答案：通过模拟数字出栈的过程获取每一位数字 25.96% 136 ms  时间复杂度 O(lgX) X中有log10X位数字
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var sign = x < 0 ? -1 : 1;
  var lastNumber;
  x = sign * x;
  var result = 0;
  var max = Math.pow(2, 31);
  while(true) {
    lastNumber = x % 10;
    x = (x - lastNumber) / 10;
    result = result * 10 + lastNumber;
    // 判断是否溢出
    if ( (sign === 1 && result > max -1) || (sign === -1 && result > max) ) {
      return 0;
    }
    if (x === 0) {
      return sign * result;
    }
  }
}
