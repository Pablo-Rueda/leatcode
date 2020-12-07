/* Problem 0003: Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.

*/

// solution
//-------------
// problem: 2 loops giving a O(n2) that can be quite slow
var lengthOfLongestSubstring = function(s) {
    let substring = []; // track the substring
    let j = 0; // set last character of the substring 
    let maxCount = 0; // max length

    for(let i in s){ // loop over string characters (i = initial character of substring)

        if(j == i){
            substring.push(s[j])
            j++} // if initial and last are the same, increase last +1

        while (s[i] != s[j] && // while initial is not the same as last character
                substring.indexOf(s[j]) < 0 &&  // while substring has no repeated values
                j<s.length){ // while last character is not over the substring length
            substring.push(s[j]); // add last character to substring
            j++; // increase last character +1 
        } //when while loop is broken: initial is = to last character

        maxCount = (maxCount < substring.length) ? substring.length : maxCount; // if substring length superior to previous max length; add it
        substring.shift(); // loops is going to restart, so remove first character
    }
    return maxCount;
};


// faster leetcode solution - O(n) - :
//---------------------------
var lengthOfLongestSubstring2 = function(s)  {
    let current = []; // substring
    let maxLn = current.length; // substring length

    for (let i = 0; i < s.length; i++) { // iterate over original string in i
        let x = current.indexOf(s[i]) // index of i in substring

        if(x >= 0 && x !== i) { // ¿is the current i character already in substring?
            current.splice(0, (x + 1)); // remove everything until the previous duplicate
        }

        current.push(s[i]); // push the character

        if (current.length >= maxLn) maxLn = current.length; //is the current length is superior to the previous, update length
    }
   return maxLn;
};
s = "pwwkew";

console.log(lengthOfLongestSubstring2(s))
