/**
给定两个二进制字符串，返回他们的和（用二进制表示）。

输入为非空字符串且只包含数字 1 和 0。

输入: a = "11", b = "1"
输出: "100"

输入: a = "1010", b = "1011"
输出: "10101"

https://leetcode-cn.com/problems/add-binary/description/
 */

/**
 * 二进制求和
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    var aLen = a.length - 1,
        bLen = b.length - 1,
        a = a.split(''),
        b = b.split(''),
        sum = 0,
        result = '';

    while (aLen >= 0 || bLen >= 0) {
        if (aLen >= 0) {
            sum += parseInt(a[aLen]);
            aLen--;
        }

        if (bLen >= 0) {
            sum += parseInt(b[bLen]);
            bLen--;
        }

        if (sum === 3) {
            result = '1' + result;
            sum = 1;
        } else if (sum === 2) {
            result = '0' + result;
            sum = 1;
        } else if (sum === 1 || sum === 0) {
            result = sum + '' + result;
            sum = 0;
        }
    }

    if (sum === 1) {
        result = '1' + result;
    }

    return result;
};