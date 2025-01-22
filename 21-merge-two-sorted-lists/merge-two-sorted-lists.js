/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0)
    let head = dummy // will reff to dummy(0)
    
    while (list1 && list2) {
        console.log(list1, '<< list 1')
        console.log(list2, '<< list2')
        console.log(dummy, '<< dummy')

        if (list1.val <= list2.val) {
            dummy.next = list1
            list1 = list1.next
        } else {
            dummy.next = list2
            list2 = list2.next
        }
        
        console.log(dummy, '<< dummy after')
        console.log(head, '<< head after')
        dummy = dummy.next
        
        console.log(dummy, '==== new dummy')
    }
    
    console.log(list1, '<<< list1 ')
    console.log(list2, '<< list2')
    console.log(dummy, '<< dummy')
    if (list1 !== null) {
        dummy.next = list1
    } else {
        dummy.next = list2
    }
    
    return head.next
    
};