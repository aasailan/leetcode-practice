/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 *
 * https://leetcode-cn.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (42.44%)
 * Total Accepted:    28.9K
 * Total Submissions: 67.9K
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 
 * 你可以假设数组中无重复元素。
 * 
 * 示例 1:
 * 
 * 输入: [1,3,5,6], 5
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: [1,3,5,6], 2
 * 输出: 1
 * 
 * 
 * 示例 3:
 * 
 * 输入: [1,3,5,6], 7
 * 输出: 4
 * 
 * 
 * 示例 4:
 * 
 * 输入: [1,3,5,6], 0
 * 输出: 0
 * 
 * 
 */
/**
 * @description 暴力解法，从头遍历元素，找到合适的位置
 * @summary 9.45% 124ms
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function(nums, target) {
//   // 目标值等于或者被插入在 数组的开头、末尾
//   if (nums.length === 0 || target <= nums[0]) return 0;
//   if (nums[nums.length -1] < target) return nums.length;

//   for (var i = 1; i < nums.length; i++) {
//     if (nums[i] >= target) {
//       return i;
//     }
//   }

//   return nums.length;
// };

/**
 * @description 分治递归
 * @summary 4.85% 156 ms
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  // 排除特殊情况
  if (target < nums[0]) return 0;
  if (nums[nums.length - 1] < target) return nums.length;
  // 定义递归函数
  function _searchInsert(nums, target, start, end) {
    if (end <= start) return start; 
    if (nums[start] === target) return start;
    if (nums[end] === target) return end; 

    var divIndex = Math.floor((start + end) / 2);
    var firstEnd = divIndex;
    var secondStart = divIndex + 1;
    if (nums[firstEnd] < target && target < nums[secondStart]) {
      return secondStart;
    } else if (target <= nums[firstEnd]) {
      return _searchInsert(nums, target, start, firstEnd);
    } else {
      return _searchInsert(nums, target, secondStart, end);
    }
  }
  // 开始递归
  return _searchInsert(nums, target, 0, nums.length - 1);
};

// 测试用例
// console.log(searchInsert([1,3,5,6], 5));
// console.log(searchInsert([1,3,5,6], 2));
// console.log(searchInsert([1,3,5,6], 7));
// console.log(searchInsert([1,3,5,6], 0));
// console.log(searchInsert([1,3], 3));
// console.log(searchInsert([1,3], 2));
