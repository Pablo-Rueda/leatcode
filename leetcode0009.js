/* Problem 0009: Palindrome Number

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Follow up: Could you solve it without converting the integer to a string?
*/

// Solution:
//----------

var isPalindrome = function(x) {
    if(x<0){return false}

    // Follows same logic as leetcode007 optimal solution:
    let temp = 0; 
    let pop; 
    let num = Math.abs(x); 

    while (num !== 0) { 
        pop = num % 10; 
        temp = (temp * 10) + pop;
        num = Math.floor(num / 10); 
    }
    return temp == x;
};


// Leetcode best solution (for personal notes):
//----------
const reverseInt = function(x){
    let reversed = 0
    
    while(x > 0){
        reversed = (reversed * 10) + (x % 10); // summary the inversion variables and loop in  2 lines
        x = Math.floor(x/10);
    }
    return reversed
}

const isPalindrome = function(x) {
  if(x < 0) return false
    
  return x === reverseInt(x); // apply the isPalindrome function with the external reverse function
    
};