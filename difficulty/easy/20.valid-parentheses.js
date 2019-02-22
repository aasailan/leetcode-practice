/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (36.21%)
 * Total Accepted:    44.5K
 * Total Submissions: 122.8K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */
/**
 * @description 从左往右扫描字符串，将左边括号压入栈，右边括号则逐一与出栈元素对比是否成对
 * @summary 官方解法思路与此相同 16.31% 132 ms
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s === '') return true; 
  var stack = [];
  var regLeft = /(\(|\[|{)/;
  // var regRight = /(\)|\]|})/;
  var map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  for (var i = 0; i < s.length; i++) {
    if (regLeft.test(s[i])) {
      stack.push(s[i]);
    } else if (map[stack.pop()] !== s[i]) {
      return false;
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};
