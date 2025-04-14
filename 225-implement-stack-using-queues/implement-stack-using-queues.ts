class MyStack {
    public stack
    constructor() {
        this.stack = []
    }

    push(x: number): void {
        this.stack.push(x)
    }

    pop(): number {
        return this.stack.pop()
    }

    top(): number {
        const last_index = this.stack.length - 1
        return this.stack[last_index]
    }

    empty(): boolean {
        return this.stack.length === 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */