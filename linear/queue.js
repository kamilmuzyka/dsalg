// Method 1 - Fixed head
class QueueM1 {
    constructor() {
        this.collection = []
        this.head = 0
        this.tail = 0
    }

    enqueue(element) {
        this.collection.push(element)
        this.tail++
    }

    dequeue() {
        if(this.tail === 0) {
            return 'The queue is empty'
        } else {
            this.collection.shift()
            this.tail--
        }
    }

    first() {
        return this.collection[this.head]
    }

    empty() {
        return this.tail === 0
    }
}

// Method 2 - Moving head
class QueueM2 {
    constructor() {
        
    }
}

module.exports = {
    QueueM1
}