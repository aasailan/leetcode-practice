/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/description/
 *
 * algorithms
 * Easy (42.29%)
 * Total Accepted:    82.8K
 * Total Submissions: 195.3K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * 
 * 示例 1:
 * 
 * 给定数组 nums = [1,1,2], 
 * 
 * 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 
 * 
 * 你不需要考虑数组中超出新长度后面的元素。
 * 
 * 示例 2:
 * 
 * 给定 nums = [0,0,1,1,1,2,2,3,3,4],
 * 
 * 函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
 * 
 * 你不需要考虑数组中超出新长度后面的元素。
 * 
 * 
 * 说明:
 * 
 * 为什么返回数值是整数，但输出的答案是数组呢?
 * 
 * 请注意，输入数组是以“引用”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。
 * 
 * 你可以想象内部操作如下:
 * 
 * // nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
 * int len = removeDuplicates(nums);
 * 
 * // 在函数里修改输入数组对于调用者是可见的。
 * // 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
 * for (int i = 0; i < len; i++) {
 * print(nums[i]);
 * }
 * 
 * 
 */
/**
 * @description 遍历数组，通过计算重复元素的数量来对每一个元素进行位移
 * @summary 53.55% 168ms 
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//   // 排除特殊情况
//   if (!nums || nums.length === 0) return 0;
//   if (nums.length === 1) return 1;

//   // 相等元素计数
//   var count = 0;
//   for (var i = 1; i < nums.length; i++) {
//     if (nums[i - 1] === nums[i]) {
//       count++;
//     }
//     nums[i - count] = nums[i];
//   }
//   return nums.length - count;
// };

/**
 * @description 官方解法：遍历数组，利用快慢指针，快指针用于遍历数组，慢指针用于维护不同元素的数组
 * @summary 49.57% 192ms 
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // 排除特殊情况
  if (!nums || nums.length === 0) return 0;
  if (nums.length === 1) return 1;

  // 慢指针
  var index = 0;
  for (var i = 1; i < nums.length; i++) {
    if (nums[index] !== nums[i]) {
      index++;
      nums[index] = nums[i];
    }
  }
  return index + 1;
};

// 测试用例
// var a = [1,1,2];
// var b = [0,0,1,1,1,2,2,3,3,4];

// console.log(removeDuplicates(a));
// console.log(removeDuplicates(b));

// console.log(a);
// console.log(b);

