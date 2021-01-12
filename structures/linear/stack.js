class Stack {
    constructor() {
        this.collection = [];
        this.top = 0;
    }

    empty() {
        return this.top === 0;
    }

    push(element) {
        this.top++;
        return this.collection.push(element);
    }

    pop() {
        if (this.empty()) {
            return null;
        } else {
            this.top--;
            return this.collection.pop();
        }
    }

    peek() {
        if (this.empty()) {
            return null;
        } else {
            return this.collection[this.top - 1];
        }
    }
}

export default Stack;
