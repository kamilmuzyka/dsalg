class Stack {
    constructor() {
        this.collection = []
        this.top = 0
    }

    push(element) {
        this.collection.push(element)
        this.top++
    }

    pop() {
        if (this.top === 0) {
            return 'The stack is empty'
        } else {
            this.collection.pop()
            this.top--
        }
    }

    peek() {
        if (this.top === 0) {
            return 'The stack is empty'
        } else {
            return this.collection[this.top - 1]
        }
    }

    empty() {
        return this.top === 0
    }
}

module.exports = Stack