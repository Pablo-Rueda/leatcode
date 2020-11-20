/* Problem 0007: Reverse Integer

Given a 32-bit signed integer, reverse digits of an integer.

Note:
Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: 
[−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

*/

// Solution:
//----------
/*
var reverse = function(x) {
    function reverseArr(arr){
        let rvArr = [];
        for(let i = 0; i<arr.length; i++){
            rvArr.unshift(arr[i]);
        }
        return rvArr;
    }
    // Base elements
    let bitsLim = Math.pow(2, 31);
    let bitsLimSplit = bitsLim.toString().split("");
    let revBitLim = parseInt(reverseArr(bitsLimSplit).join(""));
    let bitLength = bitsLimSplit.length;

    let splitted = Math.abs(x).toString().split("");
    
    // exceptions:
    if( ((-bitsLim+1)>x) || (x>(bitsLim-1)) || // not storagable input
    ((splitted.length = bitLength) &&
     parseInt(splitted[bitLength-1]) > parseInt(bitsLimSplit[bitLength-1])) // reduce complexity for big numbers 
    ){return 0}

    let reversed = parseInt(reverseArr(splitted).join("")); // Get reverse string:

    if(((-bitsLim+1)>reversed) || (reversed>(bitsLim-1))){return 0}
    if(x>0){return reversed}else{return - reversed}
};
*/

// Leetcode best solution (for personal notes):
//----------
// !!! No unnecessary split or memory comsumption, instead it recalculates the number throught a loop.
// Quite clean and elegant. Notes:
var reverse = function(x) { 
    let i = Math.pow(2, 31) - 1; // get the storage limit

    let temp = 0; // temporal variable for the solution = bitsLim 
    let pop; // reminder
    let num = Math.abs(x); // iterate over the absolute value

    while (num !== 0) { 
        pop = num % 10; // since it'll work with integers, the reminder of x/10 will be the single last element 
        temp = (temp * 10) + pop; // add the reminder to the new number as the unit (clean math to "unshift")
        num = Math.floor(num / 10); // remove the reminder from the original number to keep looping
    }

    if (x > 0 && temp < i) {
        return temp;
    }
    if (x < 0 && temp < i) {
        return -temp;
    } else{
        return 0;
    }
};


console.log(reverse(327));