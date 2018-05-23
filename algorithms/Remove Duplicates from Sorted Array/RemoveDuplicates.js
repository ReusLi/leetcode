/**
给定一个排序数组，你需要在原地删除重复出现的元素，

使得每个元素只出现一次，返回移除后数组的新长度。

不要使用额外的数组空间

你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/description/
 */

/**
 * 删除排序数组中的重复项
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var firstLetterIndex = 0;
    for (var i = 0, j = 1, len = nums.length; j < len; ) {
        if (nums[i] === nums[j]) {
            j++;
        } else {
            nums[i+1] = nums[j];
            i++;
        }
    }
    return i + 1;
};

removeDuplicates([1,1,2]); // 2

removeDuplicates([0,0,1,1,1,2,2,3,3,4]); // 5