/**

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

https://leetcode-cn.com/problems/valid-parentheses/description/

 */

/**
 * 有效的括号
 * @param {string} str
 * @return {boolean}
 */
var isValid = function (str) {
    var leftParenth = ['(', '{', '['],
        leftIndex = -1,
        rightParenth = [')', '}', ']'],
        rightIndex = -1,
        stack = [],
        arr = str.split('');

    var isMattch = arr.every(function(str, index) {
        if (index === 0 && rightParenth.indexOf(str) !== -1) {
            return false;
        }

        leftIndex = leftParenth.indexOf(str);
        rightIndex = rightParenth.indexOf(str);

        if (leftIndex !== -1) {
            stack.unshift(leftIndex);
            return true;
        } else {
            return rightIndex === stack.shift();
        }
    })

    return isMattch && stack.length === 0;
}

isValid('([)]'); // false