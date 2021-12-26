/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：

0 <= a, b, c, d < n
a、b、c 和 d 互不相同
nums[a] + nums[b] + nums[c] + nums[d] == target
你可以按 任意顺序 返回答案 。

输入：nums = [1,0,-1,0,-2,2], target = 0
输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

输入：nums = [2,2,2,2,2], target = 8
输出：[[2,2,2,2]]
 */
 var fourSum = function(nums, target) {
    if (nums.length < 4) {
        return [];
    }
    nums = nums.sort((a,b) => {
        return a - b;
    });
    let i = 0,
        j = 1,
        len = nums.length,
        left = j + 1,
        right = len - 1,
        tmpSum = 0,
        result = [];

    while (i < len) {
        if (nums[i] === nums[i-1]) {
            i++;
            continue;
        }
        j = i + 1;
        while (j < len) {
            if (nums[j] === nums[j-1] && j - 1 > i) {
                j++;
                continue;
            }
            left = j + 1;
            right = len - 1;
            while(left < right) {
                tmpSum = nums[i] + nums[j] + nums[left] + nums[right];
                if (tmpSum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    while(nums[left] === nums[left+1]) {
                        left++;
                    }
                    while(nums[right] === nums[right-1]) {
                        right--;
                    }
                } 
                if (tmpSum < target) {
                    left++;
                } else {
                    right--;
                }
            }
            j++;
        }
        i++;
    }
    return result;
};