/* Problem 0027: Remove Element.

Given an array nums and a value val, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying 
the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

*/

// Solution:
//------------

var removeElement = function(nums, val) { 
    for(let i = 0; i<nums.length; i++){ //go throught the nums array
        if(nums[i] == val){ // check if the num is same as value
            nums.splice(i,1);  // if it is, remove it
            i--; // now nums[i] points to i+1, so i-- to go 1 element back in the loop  
        }
    }
    return nums.length;
};

console.log(removeElement([3,2,1,2,3],2))
