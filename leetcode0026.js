/* Problem 0026: Merge Two Sorted Lists

Given a sorted array nums, remove the duplicates in-place such that each element 
appears only once and returns the new length.

Do not allocate extra space for another array, you must do this by modifying the input 
array in-place with O(1) extra memory.
*/

// Solution:
//------------

var removeDuplicates = function(nums) {
    let lgth = nums.length;
    let i = 0;
    while(i<lgth){ // loop throught elements of array
        if(nums.slice(i+1,nums.length).indexOf(nums[i])>=0){
            nums.splice(i,1)
            lgth -= 1;
        }else{
            i++;
        }
    }
    return nums.length;
};


// leetcodes faster solution:
var removeDuplicates = function(nums) {
    var idx = 0, i = 1;
    while (i <= nums.length) {
        if (nums[i] !== nums[idx]) {
            nums[++idx] = nums[i];
        }
        i++;
    }
    return idx;
};

let input = [0,0,1,1,1,2,2,3,3,4]
removeDuplicates(input)
