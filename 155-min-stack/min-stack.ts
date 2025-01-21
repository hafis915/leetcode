class MinStack {
    stack: number[]
    minimum_stack: number[]
    constructor() {
        this.stack = [];
        this.minimum_stack = [];
    }

    push(val: number): void {
        this.stack.push(val)
        val = Math.min(
            val,
            this.minimum_stack.length === 0
                ? val
                : this.minimum_stack[this.minimum_stack.length - 1],
        );
        this.minimum_stack.push(val);

    }

    pop(): void {
        this.stack.pop()
        this.minimum_stack.pop()
    }

    top(): number {
        const size = this.stack.length
        return this.stack[size -1]
    }

    getMin(): number {
        const size = this.stack.length
        return this.minimum_stack[size-1]
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */