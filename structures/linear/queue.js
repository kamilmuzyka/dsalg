// Method 1 - Fixed head
export class QueueM1 {
    constructor() {
        this.collection = [];
        this.head = 0;
        this.tail = 0;
    }

    empty() {
        return this.collection.length === 0;
    }

    enqueue(element) {
        this.tail++;
        return this.collection.push(element);
    }

    dequeue() {
        if (this.empty()) {
            return null;
        } else {
            this.tail--;
            return this.collection.shift();
        }
    }

    first() {
        if (this.empty()) {
            return null;
        } else {
            return this.collection[this.head];
        }
    }
}

// Method 2 - Moving head
export class QueueM2 {
    constructor() {
        this.collection = [];
        this.head = 0;
        this.tail = 0;
    }

    empty() {
        return this.head === this.tail;
    }

    enqueue(element) {
        this.tail++;
        return this.collection.push(element);
    }

    dequeue() {
        if (this.empty()) {
            return null;
        } else {
            const element = this.collection[this.head];
            this.head++;
            return element;
        }
    }

    first() {
        if (this.empty()) {
            return null;
        } else {
            return this.collection[this.head];
        }
    }
}