/**
假设你正在爬楼梯。需要 n 步你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 步 + 1 步
2.  2 步

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 步 + 1 步 + 1 步
2.  1 步 + 2 步
3.  2 步 + 1 步

https://leetcode-cn.com/problems/climbing-stairs/description/
https://blog.crayygy.com/14599905787744.html
 */

/**
 * 爬楼梯
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var result = [];
    result[0] = 1
    if (n >= 2) {
        result[1] = 2;
    }
    
    for (var i = 2; i < n; i++) {
        result[i] = result[i-1] +result[i-2];
    }
    return result[n-1]
}