/**
给定一个非负整数组成的非空数组，在该数的基础上加一，返回一个新的数组。

最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

https://leetcode-cn.com/problems/plus-one/description/
 */

/**
 * 加一
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    // Number函数只能转length=16以内的string, 超过16位的自己手动计算
    if (digits.length <= 16) {
        return (Number(digits.join('')) + 1 + '').split('').map(function(num){
            return Number(num);
        })
    }
    
    var len = digits.length,
        num = 10

    for (var i = len - 1; i >= 0 && num === 10; i--) {
        num = digits[i] + 1;
        num === 10 ? digits[i] = 0 : digits[i] = num;
    }

    digits[0] === 0 ? digits.unshift(1) : null;

    return digits;
};

plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);
// [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]