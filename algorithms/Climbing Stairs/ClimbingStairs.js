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
 * 爬楼梯 (自底向上的动态规划)
 * 
 * 解法思想是, 爬上n阶楼梯的只有2种情况:
 * 1. 从n-1阶楼梯上
 * 2. 从n-2阶楼梯上
 * 所以n阶解为 (n-1) + (n-2) 的解, 而n-1, n-2又可继续拆解, 一直到1阶楼梯和2阶楼梯
 * 这里可用动态规划, 也可用递归
 * 但考虑性能, 用动态规划比较好
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var result = [];
    // 爬一步
    result[0] = 1;
    // 爬两步
    result[1] = 2;
    
    // 三步起的解 = (n-1) + (n-2) 的解
    for (var i = 2; i < n; i++) {
        result[i] = result[i-1] + result[i-2];
    }

    return result[n-1]
}