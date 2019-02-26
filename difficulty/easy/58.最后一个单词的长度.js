/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 *
 * https://leetcode-cn.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (28.56%)
 * Total Accepted:    17.2K
 * Total Submissions: 59.7K
 * Testcase Example:  '"Hello World"'
 *
 * 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。
 * 
 * 如果不存在最后一个单词，请返回 0 。
 * 
 * 说明：一个单词是指由字母组成，但不包含任何空格的字符串。
 * 
 * 示例:
 * 
 * 输入: "Hello World"
 * 输出: 5
 * 
 * 
 */
/**
 * @description 常规解法 将字符串根据空格分割成单词数组。然后找出最后一个不为空字串的单词
 * @summary 6.93% 144ms 
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (!s || s.length === 0) return 0; 
  var words = s.split(' ');
  for (var i = words.length - 1; i >= 0; i--) {
    if (words[i].length > 0) {
      return words[i].length;
    }
  }
  return 0;
};

// NOTE: 可以尝试正则表达式

// 测试用例
// console.log(lengthOfLastWord('Hello World'));
