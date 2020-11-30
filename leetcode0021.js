/* Problem 0021: Merge Two Sorted Lists

Merge two sorted linked lists and return it as a new sorted list. 
The new list should be made by splicing together the nodes of the first two lists.

*/

// create lists nodes:
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let l1 =    new ListNode(1,
    new ListNode(2,
    new ListNode(4)))
let l2 =    new ListNode(1,
    new ListNode(3,
    new ListNode(4)))
let l3 = new ListNode(1)
let l4 = new ListNode(2)

// Solution (using recursion):
//------------
var mergeTwoLists = function(l1, l2) {
    if (!l1 || !l2) return l1 || l2; // if l1 or l2 is null, return short-circuit boolean evaluation: if l1 is not null, return l1, else return l2

    if(l1.val<l2.val){ 
        return new ListNode(l1.val, mergeTwoLists(l1.next, l2)); //return node, the "next node" applies the recursion
    }else{
        return new ListNode(l2.val, mergeTwoLists(l1, l2.next));
    }
}; 

// fastest leetcode solution:
var mergeTwoLists = function(l1, l2) {
    let mergedList = new ListNode(0); // head node is always 0
    let head = mergedList;
      while(l1 && l2){ // direct loop while nono of lists is null
          if(l1.val < l2.val){ 
              head.next = l1;
              l1 = l1.next;
          }
          else{
              head.next = l2;
              l2 = l2.next;
          }
          head = head.next;
      }
      
      head.next = l1 || l2; // return short-circuit boolean evaluation: if l1 is not null, return l1, else return l2
      return mergedList.next; //returning the next element of the head, the head won't be 0
  };