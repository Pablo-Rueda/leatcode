/* Problem 0002: Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

*/

// Solution (not valid solution):
//----------
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function sum(a,b,c=0){
    let sum = 0;
    if(a == null ){
        sum = b + c;
    }else if(b == null){
        sum = a + c;
    }else{
        sum = a + b + c;
    }
    return ((sum<10) ? [sum,0] : [sum%10,1]);
}


var addTwoNumbers = function(l1, l2) {
    let val = sum(l1.val,l2.val);
    let rem = val[1];
    let sol = new ListNode(val[0], null);
    

    deeper = sol;
    ref1 = l1.next;
    ref2 = l2.next;
    
    while(ref1 !== null || ref2 !== null){
        
        val = sum(ref1.val,ref2.val,rem);
        rem = val[1];
        deeper.next = new ListNode(val[0], null);
        
        deeper = deeper.next;
        ref1 = ref1.next
        ref2 = ref2.next
    }
    return sol;
};


console.log(
    addTwoNumbers([2,4,3], [5,6,4])
)

// leet code solution:
// -------------------
var addTwoNumbers = function(l1, l2) {
    /**
     * The goal is to create a create a new list that registers the sum of digits 
     * in l1 and l2.
     */
    const node = new ListNode(null);
    const sum = (list1, list2, head, carry) => {
      if (list1 === null && list2 === null) {
        // Base case. Create a new node if there is remaining carry
        if (carry === 0) {
          return;  
        }
        head.next = new ListNode(carry);
        return;
      }
      
      /**
       * The rest are following the same operation. We sum the node values and 
       * carry if available, and register the result in the new list. We will 
       * have to pass the carry to the next sum() if the sum is larger than 10.
       */
      if (list1 === null) {
        const cal = list2.val + carry;
        head.next = new ListNode(cal % 10);
        sum(null, list2.next, head.next, Math.floor(cal / 10));
        return;
      }
      
      if (list2 === null) {
        const cal = list1.val + carry;
        head.next = new ListNode(cal % 10);
        sum(list1.next, null, head.next, Math.floor(cal / 10));
        return;
      }
      
      const cal = list1.val + list2.val + carry;
      head.next = new ListNode(cal % 10);
      sum(list1.next, list2.next, head.next, Math.floor(cal / 10));
    };
    
    sum(l1, l2, node, 0);

    return node.next;
};