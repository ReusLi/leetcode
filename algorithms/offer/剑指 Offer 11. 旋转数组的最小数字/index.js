/**
 * 个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。

给你一个可能存在 重复 元素值的数组 numbers ，它原来是一个升序排列的数组，并按上述情形进行了一次旋转。请返回旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为1。 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

输入：[3,4,5,1,2]
输出：1

输入：[2,2,2,0,1]
输出：0
 * @param {number[]} numbers
 * @return {number}
 */
 var minArray = function(numbers) {
    let i = 0,
        j = numbers.length - 1,
        m = Math.floor(j / 2);
        [4,5,6,7,8,9,1,2,3]
    while(i < j) {
        m = Math.floor((i + j) / 2);
        if (numbers[m] > numbers[j]) {
            i = m + 1;
        } else if (numbers[m] < numbers[j]) {
            j = m;
        } else {
            j--;
        }
    }
    return numbers[i];
};