/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 *
 * https://leetcode-cn.com/problems/remove-element/description/
 *
 * algorithms
 * Easy (52.85%)
 * Total Accepted:    35.9K
 * Total Submissions: 67.8K
 * Testcase Example:  '[3,2,2,3]\n3'
 *
 * 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。
 * 
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * 
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 * 
 * 示例 1:
 * 
 * 给定 nums = [3,2,2,3], val = 3,
 * 
 * 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。
 * 
 * 你不需要考虑数组中超出新长度后面的元素。
 * 
 * 
 * 示例 2:
 * 
 * 给定 nums = [0,1,2,2,3,0,4,2], val = 2,
 * 
 * 函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。
 * 
 * 注意这五个元素可为任意顺序。
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
 * // nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
 * int len = removeElement(nums, val);
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
 * @description 遍历数组，统计与val相等的元素的数量，然后对需要位移的元素进行位移
 * @summary 8.39% 124 ms
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {
//   // 排除特殊情况
//   if (!nums || nums.length === 0) return 0;
//   if (nums.length === 1 && nums[0] === val) return 0;

//   // 相等元素计数
//   var count = 0;
//   for (var i = 0; i < nums.length; i++) {
//     if (nums[i] === val) {
//       count++;
//       continue;
//     }
//     nums[i - count] = nums[i];
//   }
//   return nums.length - count;
// };

/**
 * @description 官方解法：把相等的数组元素与数组末尾元素调换，可以缩短循环长度
 * @summary 20.82% 104 ms
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  // 排除特殊情况
  if (!nums || nums.length === 0) return 0;
  if (nums.length === 1 && nums[0] === val) return 0;

  var n = nums.length - 1;
  for (var i = 0; i <= n;) {
    if (nums[i] === val) {
      nums[i] = nums[n];
      n--;
    } else {
      i++;
    }
  }

  return n + 1;
};

// 测试用例
// var a = [3,2,2,3];
// console.log(removeElement(a, 3));
// console.log(a);

// var b = [0,1,2,2,3,0,4,2];
// console.log(removeElement(b, 2));
// console.log(b);
