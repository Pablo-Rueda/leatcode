/* Problem 0038: count-and-say.

The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the
 same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace
  the counts with a number and concatenate every saying.
*/

// Solution:
//------------


/*
var countAndSay = function(n) {
    let arr = ["1"];
    for(let i = 1; i<n; i++){
        let current = [];
        for(let j = 0; j < arr.length; j++){

            if(arr[j] == String(arr[j].length)){  // same length as element
                current.push(arr[j]+arr[j]); // push them togetehr
            }else{
                current.push(String(arr[j].length)); // push length
                current.push(arr[j][0]); // then element
            }
            console.log(i,j, current)
            console.log(current[current.length-1][0])
        }
        arr = current;
    }

    return arr.join("");
};

*/


// Leetcode one line solution:
// https://leetcode.com/problems/count-and-say/discuss/929252/JS-one-line-solution-with-regex
// ---------------------------- 

var countAndSay2 = function(n) {
    return n === 1 ? '1' : countAndSay(n - 1).match(/(.)\1*/g).map(match => match.length + match[0]).join('');
    // checks if n = 1; if it is, return 1
    // if not, applies again the countAndSay function with n-1
        // in the countAndSay returns, matchs 1
        // maps returning elements
        // match the elements: returns the length + the element;
        // join everything 

}
console.log(countAndSay(10))


// leetcode faster solution:
// --------------------------
const countAndSay = (n, str = '1') => {
    if (n === 1) {
      return str;
    }
    let newStr = '',
      count = 0,
      say = str[0];
    for (let i = 0; i < str.length; i += 1) {
      if (str[i] === say) {
        count += 1;
      } else {
        newStr += count + say;
        count = 1;
        say = str[i];
      }
    }
    return countAndSay(n - 1, newStr + count + say);
  };