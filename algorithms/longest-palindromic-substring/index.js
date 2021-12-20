/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。

提示：

1 <= s.length <= 1000
s 仅由数字和英文字母（大写和/或小写）组成
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    s = s.split('');
    if (s.length === 1) {
        return s[0];
    }
    if (s.length === 2) {
        if (s[0] === s[1]) {
            return s.join('');
        } else {
            return s[0];
        }
    }

    let i = 0,
        len = s.length,
        sindex = 0,
        eindex = 0;
    while (i < len) {
        let [tempSindexA, tempEindexA] = centerSpeadA(s, i, len);
        let [tempSindexB, tempEindexB] = centerSpeadB(s, i, len);
        if (tempEindexA - tempSindexA > tempEindexB - tempSindexB) {
            tempSindexB = tempSindexA;
            tempEindexB = tempEindexA;
        }
        if (tempEindexB - tempSindexB >= eindex - sindex) {
            sindex = tempSindexB;
            eindex = tempEindexB;
        }
        i++;
    }
    var result = s.join('').slice(sindex, eindex + 1);
    return result;
};

var centerSpeadA = function(s, cindex, len) {
    let left = cindex - 1,
        right = cindex + 1,
        tempSindex = 0,
        tempEindex = 0;

    // 121对称
    while (left >= 0 && right < len && s[left] === s[right]) {
        tempSindex = left;
        tempEindex = right;
        left--;
        right++;
    }


    return [tempSindex, tempEindex];
}

var centerSpeadB = function(s, cindex, len) {
    let left = cindex - 1,
        right = cindex,
        tempSindex = 0,
        tempEindex = 0;

    // 22对称
    while (left >= 0 && right < len && s[left] === s[right]) {
        tempSindex = left;
        tempEindex = right;
        left--;
        right++;
    }


    return [tempSindex, tempEindex];
}