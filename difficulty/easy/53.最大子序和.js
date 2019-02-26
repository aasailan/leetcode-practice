/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (41.92%)
 * Total Accepted:    36.2K
 * Total Submissions: 85.7K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 示例:
 * 
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * 
 * 
 * 进阶:
 * 
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 * 
 */
/**
 * @description 暴力解法，遍历每一种可能，时间复杂度O(n^2)
 * @summary 396ms
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//   var max = nums[0];
//   // var start = 0;
//   // var end = 0;
//   var tmp;
//   for (var i = 0; i < nums.length; i++) {
//     tmp = nums[i];
//     if (tmp > max) {
//       max = tmp;
//     }
//     for (var j = i + 1; j < nums.length; j++) {
//       tmp = tmp + nums[j];
//       if (tmp > max) {
//         max = tmp;
//         // start = i;
//         // end = j;
//       }
//     }
//   }
//   return max;
// };

/**
 * @description 分治 + 函数递归，时间复杂度O(nlog2n)
 * @summary 25.68% 128ms
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {

//   function _maxSubArray(nums, start, end) {
//     if (end <= start) return nums[start];

//     var mid = Math.floor((start + end) / 2);
//     // 求左边数组最大值
//     var fristMax = _maxSubArray(nums, start, mid - 1);
//     // 求右边数组最大值
//     var secondMax = _maxSubArray(nums, mid + 1, end);

//     // 求跨越中间值的函数最大值，求得中间值左边数组最大和右边数组最大，然后加起来
//     // 左边最大 （包括中间值）
//     var midLeftMax = nums[mid];
//     var tmp = nums[mid];
//     for (var i = mid - 1; i >= start; i--) {
//       tmp = tmp + nums[i];
//       if (tmp > midLeftMax) {
//         midLeftMax = tmp;
//       }
//     }
//     // 右边最大  （包括中间值）
//     var midRightMax = nums[mid];
//     tmp = nums[mid];
//     for (var j = mid + 1; j <= end; j++) {
//       tmp = tmp + nums[j];
//       if (tmp > midRightMax) {
//         midRightMax = tmp;
//       }
//     }
//     var midMax = midLeftMax + midRightMax - nums[mid];

//     if (midMax >= fristMax && midMax >= secondMax) {
//       return midMax;
//     } else if (fristMax >= midMax && fristMax >= secondMax) {
//       return fristMax;
//     } else {
//       return secondMax;
//     }
//   }

//   return _maxSubArray(nums, 0, nums.length - 1);
// };

/**
 * @description 官方答案，时间复杂度O(n) 没太搞懂
 * @summary 46.10% 96ms
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//   var res = nums[0];
//   var sum = 0;
//   for (var i = 0; i < nums.length; i++) {
//     if (sum > 0) {
//       sum += nums[i]
//     } else {
//       sum = nums[i];
//     }
//     res = res > sum ? res : sum;
//   }
//   return res;
// }

var maxSubArray = function(nums) {
  // 当前迭代元素之前的最大子数组之和(不包含当前迭代元素)  
  var ahead = nums[0];
  // 包含当前迭代元素的最大子数组
  var containCurent = 0;
  // 开始迭代
  /**
   * 当前最大子数组有两种种情况:
   * 情况1：不包含当前迭代元素array[i].  array[start ... end] 0 <= start <= end < i 存储在ahead变量中
   * 情况2: 包含当前迭代元素array[i] array[start ... i] 0 <= start <= end = i  存储在containCurent变量中
   * 要么最大子数组在在array[0...i]中,在array[0...i]中的话必然和前一个元素相连,
   * 那么，当前元素加上前一个元素包含自身的最大子数组即为当前元素包含自身的最大子数组.
   */
  for (var i = 0; i < nums.length; i++) {
    // 为什么这样就可以维护情况1？
    if ((containCurent + nums[i]) >= nums[i]) {
      containCurent = containCurent + nums[i]
    } else {
      containCurent = nums[i];
    }

    // 情况1 和 情况2对比
    if (containCurent > ahead) {
      ahead = containCurent;
    }
  }
  return ahead;
}

// 测试用例
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
// console.log(maxSubArray([-2, 1]));
// console.log(maxSubArray([-1, -2]));
