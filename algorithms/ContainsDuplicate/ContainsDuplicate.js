/**
 * @param {number[]} nums
 * @return {boolean}
 * 给定一个整数数组，判断是否存在重复元素。
 * 
 * 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
 * 
 * 输入: [1,2,3,1]
 * 输出: true
 * 
 * 输入: [1,2,3,4]
 * 输出: false
 */
/**
 * 待优化
 */
var containsDuplicate = function(nums) {
    return nums.some((item1, index1) => {
        return nums.some((item2, index2) => {
            return item1 === item2 && index1 !== index2
        })
    })
};