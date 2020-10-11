class Stack {
    constructor(size) {
        this.size = size
        this.storage = []
        this.top = 0
    }

    empty() {
        return this.top === 0
    }

    full() {
        return this.top === this.size
    }

    push(element) {
        if(this.top < this.size) {
            this.storage[this.top] = element
            this.top = this.top + 1
        } else {
            throw new Error('Exception: Unable to execute push operation on a full stack')
        }
    }

    pop() {
        if(this.empty() === false) {
            this.storage.pop()
            this.top = this.top - 1
        } else {
            throw new Error('Exception: Unable to execute pop operation on an empty stack')
        }
    }

    peek() {
        return this.storage[this.top - 1]
    }
}
