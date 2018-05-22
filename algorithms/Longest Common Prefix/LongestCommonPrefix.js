/**
 * 最长公共前缀
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return '';
    } else if (strs.length === 1) {
        return strs[0];
    }
    
    var result = '';

    // get min str`s len
    strs = strs.sort(function (a, b) {
        return a.length - b.length;
    });

    var firstItem = strs.shift(),
        minLen = firstItem.length;

    for (var i = 1; i <= minLen; i++) {
        var prefix = firstItem.slice(0, i),
            hasCommonPrefix = false;

        
        hasCommonPrefix = strs.every(function (str, index) {
            return str.indexOf(prefix) === 0;
        })

        hasCommonPrefix && prefix.length > result.length ? result = prefix : null;
    }

    return result;
};

longestCommonPrefix(['ca', 'a']); // ''