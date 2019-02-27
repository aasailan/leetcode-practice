/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (43.80%)
 * Total Accepted:    30.5K
 * Total Submissions: 69K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
 * 
 * 示例 1：
 * 
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * 示例 2：
 * 
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 * 
 */
/**
 * @description 先计算可以拆分成2跟1有多少种情况，针对每种情况，计算2有多少种排列结果。最后累加排列结果
 * @summary 5.18% 144ms
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//   var twoCount = Math.floor(n / 2); // 2的最大个数
//   var oneCount = n % 2; // 1的最少个数
//   var result = 0; // 结果缓存
//   var sum; // 1的个数和2的个数的总和
//   var countWithOrder = 1; // 考虑了顺序后的排列
//   var factorial = 1;
//   for (; twoCount > 0 ; twoCount--) {
//     // 计算1的个数和2的个数加起来多少
//     sum = twoCount + oneCount;
//     // 计算包含了顺序有多少种可能（考虑了顺序后有多少种排列）
//     countWithOrder = 1;
//     for (var j = 0; j < twoCount; j++) {
//       countWithOrder = countWithOrder * (sum - j);
//     }
//     // 计算2的个数的阶乘（每种排列被重复计算的次数）
//     factorial = 1;
//     for (var j = 1; j <= twoCount; j++) {
//       factorial = factorial * j;
//     }

//     // 排除重复计算的次数
//     result += countWithOrder / factorial;

//     // 重置1的个数
//     oneCount = oneCount + 2;
//   }

//   return result + 1;
// };

/**
 * @description 斐波那契数列解法（缓存版本）： 从n = 1到6的输出 1、2、3、5、8、13，形成了一个斐波那契数列。所以可以用缓存加迭代的方式解决这个问题
 * @summary 10.36% 112ms
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  var cache = {};
  // 迭代次数统计
  // var count = 0;
  function _climbStairs(n) {
    // 迭代次数统计
    // count++;
    if (n === 1) return 1;
    if (n === 2) return 2;

    var first;
    if (cache[n-1]) {
      first = cache[n-1];
    } else {
      first = _climbStairs(n-1);
      cache[n-1] = first;
    }
    
    var second;
    if (cache[n-2]) {
      second = cache[n-2];
    } else {
      second = _climbStairs(n-2);
      cache[n-2] = second;
    }

    return first + second;
  }
  var result =  _climbStairs(n);
  // 输出迭代次数统计
  // console.log(count);
  return result;
};

/**
 * @description 斐波那契数列解法（无缓存版本）： 从n = 1到6的输出 1、2、3、5、8、13，形成了一个斐波那契数列。所以可以用缓存加迭代的方式解决这个问题
 * 主要拿来跟上面的缓存版本对比迭代次数
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//   // 迭代次数统计
//   var count = 0;
//   function _climbStairs(n) {
//     // 迭代次数统计
//     count++;
//     if (n === 1) return 1;
//     if (n === 2) return 2;

//     return _climbStairs(n-1) + _climbStairs(n-2);
//   }
//   var result =  _climbStairs(n);
//   // 输出迭代次数统计
//   console.log(count);
//   return result;
// };

// 测试用例
// console.log(climbStairs(1));
// console.log(climbStairs(2));
// console.log(climbStairs(3));
// console.log(climbStairs(5));
// console.log(climbStairs(6));
