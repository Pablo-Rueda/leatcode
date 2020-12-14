/* Problem 0049: Group Anagrams.

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.

*/

// solution (apply hash table):

var groupAnagrams = function(strs) {
    let dict = {}; // define hash table / dictionary / object
    for(let s in strs){  // loop over array
        let temp = strs[s]; // string
        let sorted = temp.split("").sort().join(""); // sort it by characters
        if(!dict[sorted]){ // create dictioanry key and add string
            dict[sorted] = [temp];
        }else{
            dict[sorted].push(temp); // add string to existing key
        }
    }
    let output = [] // create output array // Object.values(dict) would do it in one line
    for(const key in dict){ // loop throught the hash table
        output.push(dict[key]); // push elements to new array
    }
    return output;  
};

console.log(
    groupAnagrams(["eat","tea","tan","ate","nat","bat"])
)