class Stack {
    constructor(size) {
        this.size = size
        this.storage = []
        this.top = 0
    }

    push(element) {
        if(this.storage.length < this.size) {
            this.storage.push(element)
        } else {
            throw new Error('Exception: Unable to execute push operation on a full stack')
        }
    }

    pop() {
        if(this.storage.length > 0) {
            this.storage.pop()
        } else {
            throw new Error('Exception: Unable to execute pop operation on an empty stack')
        }
    }

    peek() {
        return this.storage[this.storage.length - 1]
    }

    empty() {
        return this.storage.length === 0 ? true : false
    }

    full() {
        return this.storage.length === this.size ? true : false
    }
}