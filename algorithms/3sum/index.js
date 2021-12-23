/**
 * @param {number[]} nums
 * @return {number[][]}
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]

输入：nums = []
输出：[]

输入：nums = [0]
输出：[]
 */
 var threeSum = function (nums) {
    if (nums.lenth < 4) {
        return [];
    }
    nums = nums.sort((a, b) => a - b);

    let i = 0,
        len = nums.length,
        left = 0,
        right = 0,
        sum = 0,
        result = [];

    while (i < len) {
        if (i > 0 && nums[i] === nums[i-1]) {
            i++;
            continue;
        }
        left = i + 1;
        right = len - 1;
        while (left < right) {
            sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (nums[left] === nums[left + 1]) {
                    left++;
                }
                while (nums[right] === nums[right - 1]) {
                    right--;
                }
            } 
            if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
        i++;
    }
    return result;
};
