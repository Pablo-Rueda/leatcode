/* Problem 0035: Search Insert Position.

Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

*/

// Solution:
//------------

var searchInsert = function(nums, target) {
    if(nums.indexOf(target)>-1){return nums.indexOf(target)}
    
    let i = 0;
    while(nums[i]<target){
        i++;
    }
    return i;
};