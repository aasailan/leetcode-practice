/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现strStr()
 *
 * https://leetcode-cn.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (37.48%)
 * Total Accepted:    36K
 * Total Submissions: 95.8K
 * Testcase Example:  '"hello"\n"ll"'
 *
 * 实现 strStr() 函数。
 * 
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置
 * (从0开始)。如果不存在，则返回  -1。
 * 
 * 示例 1:
 * 
 * 输入: haystack = "hello", needle = "ll"
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: haystack = "aaaaa", needle = "bba"
 * 输出: -1
 * 
 * 
 * 说明:
 * 
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 * 
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
 * 
 */
/**
 * @description 暴力解法，逐一扫描haystack的字符，与needle的字符进行对比
 * @summary 8.31% 156 ms
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // 排除特殊情况
  if (!needle) return 0;
  if (haystack.length < needle.length) return -1; 

  var index = -1;
  var length = haystack.length - needle.length;
  for (var i = 0; i <= length; i++) {
    index = i;

    for (var j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        index = -1;
        break;
      }
    }
    if (index !== -1) {
      return index;
    }
  }

  return index;
};

// 测试用例
// console.log(strStr('hello', 'll'));
// console.log(strStr('aaaaa', 'bba'));
// console.log(strStr('aaa', ''));

