/**
给定一个数组 nums 和一个值 val

你需要原地移除所有数值等于 val 的元素

返回移除后数组的新长度

不要使用额外的数组空间

你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

https://leetcode-cn.com/problems/remove-element/description/
 */

/**
 * 移除元素
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    var tmp = -1;
    for (var i = 0, j = nums.length - 1; i <= j;) {
        if (nums[i] !== val) {
            i++;
        } else if (nums[j] === val) {
            j--;
        } else if (nums[i] === val && nums[j] !== val) {
            tmp = nums[i];
            nums[i] = nums[j];
            nums[j] = tmp;
            i++;
        }
    }
    return i;
}

removeElement([3,2,2,3], 3) // 2, nums [2,2,3,3]

removeElement([3, 3], 5) // 2, nums [3,3

removeElement([3], 2) // 1, nums [3]