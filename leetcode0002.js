/* Problem 0002: Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

*/


// create lists nodes:

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let l1 =    new ListNode(2,
  new ListNode(4,
  new ListNode(9)))

let l2 = new ListNode(5,
          new ListNode(6,
            new ListNode(4,
              new ListNode(9))))

// Solution :
//----------

var addTwoNumbers = function(l1, l2) {
  if( !l1 || !l2){ return l1 || l2}

  let splitSum = function(a,b,c=0){
    let sum = a + b + c;
    if(sum<10){ return [sum,0]
    } else {    return [sum%10,1] }
  }
  let sum = [];
  let rem = 0;
  let output = new ListNode(0);
  ref = output;
  while(l1 || l2){    
    if(l1 && l2){
      sum = splitSum(l1.val, l2.val, rem);
      l1 = l1.next; 
      l2 = l2.next;
    }else{
      if(!l2){
        sum = splitSum(l1.val, rem);
        l1 = l1.next;
      }else{
        sum = splitSum(l2.val, rem);
        l2 = l2.next;
      }
    }
    ref.next = new ListNode(sum[0]);
    rem = sum[1];
    ref = ref.next;
  }
  if(sum[1]){ ref.next = new ListNode(sum[1]);}
  return output.next
};

console.log(
    addTwoNumbers(l1,l2)
)

// leet code solution:
// -------------------
var addTwoNumbers2 = function(l1, l2) {
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