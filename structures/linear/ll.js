class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    insertLast(data) {
        const node = new Node(data);
        let current;
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insertAt(data, position) {
        if (position === 0) {
            this.insertFirst(data);
            return;
        }
        if (position > this.size) {
            return 'Position out of range';
        }
        const node = new Node(data);
        let current = this.head;
        let previous = null;
        for (let i = 0; i < position; i++) {
            previous = current;
            current = current.next;
        }
        node.next = current;
        previous.next = node;
        this.size++;
    }

    removeFirst() {
        if (this.head === null) {
            return 'The list is empty';
        }
        this.head = this.head.next;
        this.size--;
    }

    removeLast() {
        if (this.head === null) {
            return 'The list is empty';
        }
        if (this.size === 1) {
            this.removeFirst();
            return;
        }
        let current = this.head;
        let previous = null;
        for (let i = 0; i < this.size - 1; i++) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.size--;
    }

    removeAt(position) {
        if (this.head === null) {
            return 'The list is empty';
        }
        if (position > 0 && position > this.size) {
            return 'Position out of range';
        }
        let current = this.head;
        let previous = null;
        if (position === 0) {
            this.head = current.next;
        } else {
            for (let i = 0; i < position; i++) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }


    removeAll() {
        this.head = null;
        this.size = 0;
    }

    returnAt(position) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (count === position) {
                return current.data;
            }
            current = current.next;
            count++;
        }
        return -1;
    }

    returnAll() {
        let current = this.head;
        const all = [];
        while (current) {
            all.push(current.data);
            current = current.next;
        }
        return all;
    }

    reverse() {
        let previous = null;
        let current = this.head;
        let next = null;
        while (current !== null) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
    }
}

export default LinkedList;