/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let flag = 1;
    if (x < 0) {
        x = -x;
        flag = -1;
    } else if (x === 0) {
        return 0;
    }
    
    let result = Number(x.toString().split('').reverse().join(''));
    
    if (result >= Math.pow(2, 31) - 1) {
        result = 0;
    }
    
    return result * flag;
};

reverse(123)// 321

reverse(-123)// -321

reverse(0)// 0

reverse(1534236469);// 0