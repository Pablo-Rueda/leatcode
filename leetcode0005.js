/* Problem 0005: Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.

*/

// solution
//-------------

var longestPalindrome = function(s) {
    if(!s) return ""
    let solution = s[0];

    for(let i = 0; i < s.length; i++){ // loop throught the characters of the string

        if(s[i] == s[i+1]){  //  loop n2
            // a palindrome base can be even (aa) or uneven (aba) || for each character, we'll check if it is the base of an 
            // even palindrome and, if it is, check how long the palindrome can get
            let tempt = s.slice(i,i+2);  // temporal palindrome string

            for( let j = 1; j < s.length; j++){ // O(n2) loop over strings to extend the palindrome
                if(!s[i-j] || !s[i+1+j] || s[i-j] !== s[i+1+j] ) break; // short breaks when there are no more characters or the string is not palindrome
                tempt = s.slice(i-j,i+j+2); // if the extension is palindrome, add it to temporal
            }

            solution = (tempt.length > solution.length) ? tempt : solution; // check if the temporal solution is larger than the previous solution; if so add it
  
        } // n2 loop ends

        if(s[i] == s[i+2]){  // n3 loop || repeat previous n2 loop, with n3 palindromes
            let tempt = s.slice(i,i+3);

            for( let j = 1; j < s.length; j++){
                if(!s[i-j] || !s[i+2+j] || s[i-j] !== s[i+2+j] ) break;
                tempt = s.slice(i-j,i+j+3);
            }

            solution = (tempt.length > solution.length) ? tempt : solution
        } // n3 loop ends
    }

    return solution;
};



// Leetcode solution (best in everything):

var longestPalindrome2 = function(s) {
    var head, //palindrome base
        tail,
      i,
      len = s.length, // length of string
      count,
      maxCount = 0,
      offset,
      result = [-1, -1];
    
    for (i = 0; i < len; i++) { // iterate over string length
      head = i; //palindrome base
      while (i < len - 1 && s.charAt(i) === s.charAt(i+1)) { 
        i++; // if it is n2 palindrome, increase i + 1; so loop goes faster
      }
      // if there is a n2 palindrome "abba" next palindromes will have it as a limit, since
      // "ab-bacab-"  the base bb can not be included in extended palindromes
      // so, this increase is to avoid repeat extra countings with n2 palindromes

      tail = i; // palindrome end = new i || will be the start of next counting? 
      count = tail - head + 1; //  palindrome length
      
      for (offset = 1; offset <= Math.min(head, len - tail - 1); offset++) {
          // inner loop until  the start / end of the palindrome
        if (s.charAt(head - offset) === s.charAt(tail + offset)) {
            // check if the palindorme get extended from the sides;
            // this application helps to track n3 palindromes
          count += 2; // since the extension implicates +1 right and +1 left => count +2
        } else {
          break; // if can not be extended || break the loop
        }
      } 
      if (count > maxCount) { // if palindrome length is over previous maximun palindrome length
        result[0] = head - offset + 1; // set new palindrome base
        result[1] = tail + offset - 1; // set new palindrome length
        maxCount = count; // max length = current length
      }
    }
    
    return s.substring(result[0], result[1] + 1); // return the string with JS "String.substring()"
  };

  console.log(
    longestPalindrome2("abadadaads")
)
