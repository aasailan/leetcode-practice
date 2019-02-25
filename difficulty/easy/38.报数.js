/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 *
 * https://leetcode-cn.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (47.82%)
 * Total Accepted:    20.6K
 * Total Submissions: 43K
 * Testcase Example:  '1'
 *
 * 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：
 * 
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 
 * 
 * 1 被读作  "one 1"  ("一个一") , 即 11。
 * 11 被读作 "two 1s" ("两个一"）, 即 21。
 * 21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。
 * 
 * 给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。
 * 
 * 注意：整数顺序将表示为一个字符串。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: 1
 * 输出: "1"
 * 
 * 
 * 示例 2:
 * 
 * 输入: 4
 * 输出: "1211"
 * 
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 */
/**
 * @description 暴力解法，通过遍历每次输入字符串来计算输出字符串，然后循环这个过程
 * @summary 16.99% 116 ms
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n===1) return '1'; 
  var str = '1';
  var count;
  var char;
  var result;
  for (var i = 1; i < n; i++) {
    count = 1;
    char = str[0];
    result = '';
    for (var j = 1; j < str.length; j++) {
      if (str[j-1] !== str[j]) {
        result = result + count + char;
        char = str[j];
        count = 1;
      } else {
        count++;
      }
    }
    result = result + count + char;
    // console.log('n: ' + n + '  result:' + result);
    str = result;
  }

  return result;
};

/**
 * @description 将输入字符串转变为数字进行处理，得出下一次输出，将最后得出的数字转为字符串
 * @summary 16.99% 116 ms
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n===1) return '1'; 
  var number = 1;
  var lastNumber;
  var result;
  var char;
  var count;
  var power;
  for (var i = 1; i < n; i++) {
    count = 1;
    char = number % 10;
    power = 1;
    result = 0;
    number = (number - char) / 10;
    while(true) {
      lastNumber = number % 10;
      if (lastNumber <= 0) {
        result = result + count * power * 10 + char * power;
        break;
      }
      if (char === lastNumber) {
        count++;
      } else {
        result = result + count * power * 10 + char * power;
        power = power * 10;
      }
      number = (number - lastNumber) / 10;
    }
    number = result;
  }

  return '' + result;
};

// 测试用例
console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
console.log(countAndSay(5));

