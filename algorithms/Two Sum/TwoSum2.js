/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function (nums, target) {
    var a = [];
    for (var i = 0, len = nums.length; i < len; i++) {
        var tmp = target - nums[i];
        if (a[tmp] !== undefined) return [a[tmp], i];
        a[nums[i]] = i;
    }
}

var nums = [2, 7, 11, 15, 7, 11, 15, 7, 11, 15, 7, 11, 15, 7, 11, 15],
    target = 18;

var result = twoSum1(nums, target)

console.log(result)