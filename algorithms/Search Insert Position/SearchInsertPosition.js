/**
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。

如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

https://leetcode-cn.com/problems/search-insert-position/description/
 */

/**
 * 搜索插入位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    var index,
        num,
        isContinue = true;
    for (var i = 0, len = nums.length; i < len && isContinue; i++) {
        num = nums[i];
        if (target === num || target < num) {
            index = i;
            isContinue = false;
        } else if (i === len - 1 && target > num) {
            index = len;
        } else if (i === len - 1 && target < num) {
            index = len - 1;
        }
    }

    return index;
};

searchInsert([1,3,5,6], 5) // 2

searchInsert([1,3,5,6], 2) // 1

searchInsert([1,3,5,6], 7) // 4

searchInsert([1,3,5,6], 0) // 0