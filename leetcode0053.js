/* Problem 0053: Maximum Subarray.

Given an integer array nums, find the contiguous subarray 
(containing at least one number) which has the largest sum and return its sum.

Follow up: If you have figured out the O(n) solution, try coding another 
solution using the divide and conquer approach, which is more subtle.

*/

// Solution:
//------------


var maxSubArray = function(nums) {
    let count = nums[0]; // current count
    let maxCount = nums[0]; //max count

    for(let i = 1; i<nums.length;i++){ // loop throught array
        count = (nums[i] > (nums[i] + count))?nums[i]:(count+nums[i]); // if count is a handicap, restart count from element; else add element
        maxCount = (count > maxCount)?count:maxCount; // if new count superiour to previous max count; update max count
    }
    return maxCount;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

// [-2,1,-3,4,-1,2,1,-5,4]