/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode-cn.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (42.28%)
 * Total Accepted:    28.7K
 * Total Submissions: 67.1K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
 * 
 * 说明:
 * 
 * 
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * 
 * 
 * 示例:
 * 
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * 输出: [1,2,2,3,5,6]
 * 
 */
/**
 * @description 暴力解法 分别遍历两个数组，如果需要插入数组1，则将数组1的元素整体向后移动一位
 * @summary 34.37% 96ms
 * @param {number[]} nums1 
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

  var num1Index = 0;
  var num2Index = 0;

  for (; num1Index < m; num1Index++) {
    if (nums2[num2Index] < nums1[num1Index]) {
      // 将nums1的元素整体向后移动一位
      for (var i = m-1; i >= num1Index; i--) {
        nums1[i+1] = nums1[i];
      }
      nums1[num1Index] = nums2[num2Index];
      m++;
      num2Index++;
    }
  }

  if (num2Index < n) {
    // 插入到nums1数组尾部
    for (; num2Index < n; num2Index++) {
      nums1[m] = nums2[num2Index];
      m++;
    }
  }
};

// 测试用例
// var n1 = [1,2,3,0,0,0];
// var n2 = [2,5,6];
// merge(n1, 3, n2, 3);
// console.log(n1);

// var n1 = [1, 2, 3, 4, 5, 0, 0, 0];
// var n2 = [2, 3, 6];
// merge(n1, 5, n2, 3);
// console.log(n1);

// var n1 = [1, 2, 3, 4, 5, 0, 0];
// var n2 = [2, 3];
// merge(n1, 5, n2, 2);
// console.log(n1);

