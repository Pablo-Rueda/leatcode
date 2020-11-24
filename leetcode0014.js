/* Problem 0014: Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

*/

// Solution:
//------------

var longestCommonPrefix = function(strs) {
    if (strs === undefined || strs.length == 0) { return "";} // return "" for empty arrays
    

    let output = ""; //output variable; if non is true it'll return ""
    let i = 0; // loop variable; keep looping throught the letters of the string
    let bool = true; // loop variable; stop when a character doesn't match

    while(bool==true && i<strs[0].length){  // stop the loop if the length next character is not the same for all the strings,
                                            // of the next character is over the 1st string length (avoid infinity loops)
        if(strs.every( char => char[i] === strs[0][i])){ // compare the letter in all the strings
            output += strs[0][i]; // if the letter is in all the strings, add it to the output
            i += 1;
        }else{
            bool = false; //if not, break the loop
        }
    }
    return output;
};


// Leetcode solutions (for personal notes):
//----------

// faster solution -but not best memory saving- :

var longestCommonPrefix2 = function(strs) {
    let longest = '';
    if (strs.length === 1) return strs[0]; //add extra condition for arrays with just one string
      if(strs.length<1) return ''; // condition for empty arrays
  
    strs.sort(); // sort the array: JS sorts string arrays alphabetically
    let first = strs[0]; 
    let last = strs[strs.length - 1];
  
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== last[i]) { //first and last element will be the most different ones, so there is no need of checking all other strings
        break;
      }
      longest += first[i];
    }
  
    return longest;
  };


// optimization of my solution memory usage:
//----------

var longestCommonPrefix3 = function(strs) {
    if (!strs.length) { return "";} // return "" for empty arrays
    
    let i = 0; // loop variable; keep looping throught the letters of the string
    let bool = true; // loop variable; stop when a character doesn't match

    while(bool==true && i<strs[0].length){  // stop the loop if the length next character is not the same for all the strings,
                                            // of the next character is over the 1st string length (avoid infinity loops)
        if(strs.every( char => char[i] === strs[0][i])){ // compare the letter in all the strings
            i += 1;
        }else{
            return strs[0].slice(0, i);
        }
    }
    return strs[0];
};

console.log(longestCommonPrefix3( ["flower","flow","flight"]))
