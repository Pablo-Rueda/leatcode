/* Problem 0020: Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/

// Solution (a bit brute force):
//------------

var isValid = function(s) {
    if(s.length%2 !== 0){ return false}
    let reduced = s;
    while(reduced.includes("()")||reduced.includes("[]")||reduced.includes("{}")){ //loop throught the string removing the parenthesis
        reduced = reduced.replace("()","");
        reduced = reduced.replace("[]","");
        reduced = reduced.replace("{}","");
    }
    return reduced.length==0; //check if there are parenthesis left
};

// isValid("()[]{[]}");
// not really good solution compared with other leetcode solutions

// Leetcode Solutions:
//------------

// Faster solution:

var isValid2 = function(s) {
    if (s.length === 1) return false
    
    const stack = [] // track array to see if parenthesis match
    
    for (let i = 0; i < s.length; i++) { // direct for loop throught all the elements of the
        const bracket = s[i]
        
        if (isOpen(bracket)) // checks if the parenthesis is an opener
            stack.push(bracket) // if it is, push it to stack array
        else { // if it is not an opener...
            if (!stack.length || !isMatched(stack[stack.length-1], bracket)) // checks if it match with previous opener
            { return false // if doesn´t match, the string is not valid
            }else{stack.pop()} //if it does match, remove it from the stack array
        }
    }
    
    return stack.length === 0
};

function isMatched(b1, b2) {
    return (
        (b1 === "(" && b2 === ")") ||
        (b1 === "[" && b2 === "]") ||
        (b1 === "{" && b2 === "}")
    )
}

function isOpen(b) {
    return b === "(" || b === "[" || b === "{"
}
    

function isClosed(b) {
    return b === "]" || b === ")" || b === "}"
}


// Solution 2 (combine above solution):
//------------