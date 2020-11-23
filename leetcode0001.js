/* Problem 0001: Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers 
such that they add up to target.

You may assume that each input would have exactly one solution,
and you may not use the same element twice.

You can return the answer in any order.
*/

// Solution:
//----------

var twoSum = function(nums, target) {
    function isTrue(element) { // function to return it own input element
      return element;
    }
    
    let index1 = 0; // index to return, we´ll be looping throught this item
    let index2 = 0; // index to return
    let bol = false; // boolean to keep the loop runing
    
    while(bol==false && index1<nums.length){ // loop until the condition (boolean) is true OR
                                             // there are no more elements (avoid infinite loops)

        let spliced = nums.slice(index1+1).map(x => (x + nums[index1])==target); // index1 + 1 since we are tracking index1 as an external variable
                            // 1) slice the nums at the index 1: avoid checking again all the numbers, so the function is faster
                            // e.g. if we comper i[0] vs all the array, there is no need in checking all the array vs i[1]
                            // 2) map throught the new sliced array
                            // 3) check if the element we are mapping (of this reduced array) + index1 is the same as target
                            // we get a new boolean array. If true, it means index 1 + the true element is = to target

        if(spliced.some(isTrue)){ // map throught the spliced array. If a returned element is true break the loop
            index2 = spliced.indexOf(true)+index1+1; // since the array spliced, the index in the original array is 
                                // index1+1 (index [0] in spliced) + the index of the element
            bol = true; // break the loop
        }else{
            index1 = index1 + 1 ; // if not, go throught the next element
        }
    }
    return [index1, index2]
};


// Leetcode best solution (for personal notes):
//----------
var twoSum = function(nums, target) {
    for (let i1 = 0; i1 < nums.length; ++i1) { // complexity reduced to one loop
        const i2 = nums.indexOf(target - nums[i1], i1 + 1); // indexOf allows a second argument to indicate the starting point of the array
        if (i2 >= 0) return [i1, i2]
    }
    return []
};

let arr = [2,7,11,15]; 
console.log(twoSum(arr,9));