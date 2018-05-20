/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function (nums, target) {
    var result = []
    nums.forEach(function (num1, i) {
        nums.forEach(function (num2, j) {
            if (i < j && (nums[i] + nums[j]) === target) {
                result = [i, j];
            }
        })
    })
    return result;
};

var nums = [2, 7, 11, 15, 7, 11, 15, 7, 11, 15, 7, 11, 15, 7, 11, 15],
    target = 18;

var result = twoSum1(nums, target)

console.log(result)