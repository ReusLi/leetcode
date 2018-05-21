/**
 * 是否回文
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let copyVaule = x;
    if (x < 0) {
        return false;
    }
    
    let result;
    result = String(copyVaule).split('').reverse().join('');
    result = Number(result);
    
    return x === result;
};

isPalindrome(121) // true

isPalindrome(-121) // false

isPalindrome(10) // false