/* Problem 0387: First Unique Character in a String.

Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

*/

// solution:
var firstUniqChar = function(s) {
    let dict = {}; // implementation of hash table
    for(let i = 0; i<s.length; i++){
        if(dict[s[i]] === undefined) dict[s[i]] = 1; // add letter
        else dict[s[i]] +=  1;     // +1 to letter
    }
    for(let i = 0; i<s.length; i++){ // research over the hash table
        if(dict[s[i]] == 1){
            return i;
        } 
    }
    return -1;
};


// leetcode faster solution:
var firstUniqChar2 = function(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i; 
    }
    return -1;
};

console.log(firstUniqChar2("leetcode"))
