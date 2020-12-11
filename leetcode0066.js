/* Problem 0066: Plus One.

Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list,
and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

*/

var plusOne = function(digits) {
    for(let i = digits.length - 1; i>-1;i--){ // loop reversely throught elements in array
        if(digits[i] == 9){ // if element is 9, set it to 0 and keep looping
            digits[i] = 0;
            if( i == 0){ //if it is last element, add 1 in front and return
                digits.unshift(1);
                return digits;
            }  

        }else{ //if digit is not 9, add 1 and return digits
            digits[i] += 1;
            return digits; // we are finished once we add +1 to the last element which is not 9, so there is no need to keep looping
        }     
    }
};


console.log(plusOne([9,9,9,9]))
