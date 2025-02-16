class MyLinkedList {
    head: any
    size: number
    constructor() {
        this.head = new ListNode(0)
        this.size = 0
    }
    getPrev(index) {
		let cur = this.head;
		for (let i = 0; i < index; i++) {
			cur = cur.next;
		}
		return cur;
	}


    get(index: number): number {
        if (index >= this.size) {
            return -1
        }
        return this.getPrev(index).next.val;
        
    }

    addAtHead(val: number): void {
        this.addAtIndex(0, val);
    }

    addAtTail(val: number): void {
        this.addAtIndex(this.size, val);
    }

    addAtIndex(index: number, val: number): void {
        if (index > this.size) {
			return;
		}
		let prev = this.getPrev(index);
		let node = new ListNode(val, prev.next);
		prev.next = node;
		this.size++;
    }

    deleteAtIndex(index: number): void {
        if (index >= this.size) {
			return;
		}
        let prev = this.getPrev(index);
		prev.next = prev.next.next;
		this.size--;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */