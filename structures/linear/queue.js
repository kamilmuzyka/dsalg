// Method 1 - Fixed head
class QueueM1 {
    constructor() {
        this.collection = [];
        this.head = 0;
        this.tail = 0;
    }

    empty() {
        return this.collection.length === 0;
    }

    enqueue(element) {
        this.collection.push(element);
        this.tail++;
    }

    dequeue() {
        if(this.empty()) {
            return 'The queue is empty';
        } else {
            this.collection.shift();
            this.tail--;
        }
    }

    first() {
        if(this.empty()) {
            return 'The queue is empty';
        } else {
            return this.collection[this.head];
        }
    }
}

// Method 2 - Moving head
class QueueM2 {
    constructor() {
        this.collection = [];
        this.head = 0;
        this.tail = 0;
    }

    empty() {
        return this.head === this.tail;
    }

    enqueue(element) {
        this.collection.push(element);
        this.tail++;
    }

    dequeue() {
        if(this.empty()) {
            return 'The queue is empty';
        } else {
            this.head++;
        }
    }

    first() {
        if(this.empty()) {
            return 'The queue is empty';
        } else {
            return this.collection[this.head];
        }
    }
}

module.exports = {
    QueueM1,
    QueueM2
}