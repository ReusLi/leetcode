var maxSubArray = function (nums) {
    var i = 0,
        j = 0,
        len = nums.length,
        result = nums[0],
        tmp = 0;
         
    while (i < len) {
        tmp = 0;
        j = i;
        while (j < len) {
            tmp += nums[j];
            if (result < tmp) {
                result = tmp;
            }
            j++;
        }
        i++;
    }
    return result;
}

var test = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

maxSubArray(test) // 6