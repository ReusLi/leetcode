/**
 * 罗马数字转整
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var result = 0;

    var value = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    var combinValue = {
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    }

    var combinKey = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM'];

    s = s.split('');

    for (var i = 0, len = s.length; i < len; i++) {
        var lt1 = s[i],
            lt2 = s[i + 1] || '';

        if (combinKey.indexOf(lt1 + lt2) !== -1) {
            i++;
            result += combinValue[lt1 + lt2];
        } else {
            result += value[lt1]
        }
    }

    return result;
};