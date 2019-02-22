/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (31.61%)
 * Total Accepted:    49.2K
 * Total Submissions: 155.4K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/**
 * @description 常规解法，从头开始遍历对比每一个字符串对象
 * @summary 23.68% 108ms 
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {
//   if (strs.length === 0) return '';
//   if (strs.length === 1) return strs[0]; 
//   var head;
//   var result = '';
//   var first = strs[0];
//   for (var i = 1; i <= first.length; i++) {
//     head = first.substring(0, i);
//     for (var j = 1; j < strs.length; j++) {
//       if (!strs[j].startsWith(head)) {
//         return result;
//       }
//     }
//     result = head;
//   }
//   return result;
// };

/**
 * @description 官方解法，从头开始遍历对比每一个字符串对象
 * @summary 10.12% 132ms 
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0]; 
  var char;
  var result = '';
  var first = strs[0];
  for (var i = 0; i < first.length; i++) {
    char = first.charAt(i);
    for (var j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return result;
      }
    }
    result = first.substring(0, i + 1);
  }
  return result;
};
