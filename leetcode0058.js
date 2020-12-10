/* Problem 0058: Length of Last Word.

Given a string s consists of some words separated by spaces, 
return the length of the last word in the string. If the last word does not exist, return 0.

A word is a maximal substring consisting of non-space characters only.

*/

// Solution:
//------------

var lengthOfLastWord = function(s) {
    let arr = s.split(" ").filter(e => e!=""); //split and filter empty elements
    if(arr.length == 0){return 0;}  // if there are no words, return 0
    return arr[arr.length-1].length; // else return length of last word

};


console.log(lengthOfLastWord("ab    "))



//faster leetcode:
var lengthOfLastWord1 = function(s) {
    let counter = 0;
    for(let i = s.length -1; i >= 0; i--) { //inverse loop throught array length
        if(s.charAt(i) != " ") counter++ //if counting element is NOT empty, count it
            // string.charAt(i) returns the character at a given index i of an string
        else if (counter > 0 && s.charAt(i) == ' ') return counter; //if counter has summed over 0 AND next element IS empty, return counter
    }
    
    return counter;
};
