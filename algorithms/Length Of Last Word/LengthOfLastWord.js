/**
给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。

如果不存在最后一个单词，请返回 0 

https://leetcode-cn.com/problems/length-of-last-word/description/
 */

/**
 * 最后一个单词的长度
 * (可以看做查询A的位置/长度, 当条件为x时)
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.split(' ');
    
    var element = s.pop()
    
    while (element === '' && element !== undefined) {
         element = s.pop()
    }
    
    var result = element === undefined ? 0 : element.length;
    
    return result;
}

lengthOfLastWord("Hello World"); // 5

lengthOfLastWord("a"); // 1

lengthOfLastWord("a "); // 1