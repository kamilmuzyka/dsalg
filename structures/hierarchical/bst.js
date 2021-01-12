import util from 'util';
import { QueueM1 as Queue } from '../linear/queue.js';

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        }
        const search = function (node) {
            if (data < node.data) {
                if (node.left === null) {
                    node.left = new Node(data);
                    return;
                }
                if (node.left !== null) {
                    search(node.left);
                    return;
                }
            }
            if (data > node.data) {
                if (node.right === null) {
                    node.right = new Node(data);
                    return;
                }
                if (node.right !== null) {
                    search(node.right);
                    return;
                }
            }
            return 'Skip duplicate';
        };
        search(node);
        return node;
    }

    remove(data) {
        const removeNode = function (node, data) {
            if (node == null) {
                return null;
            }
            if (data == node.data) {
                if (node.left == null && node.right == null) {
                    return null;
                }
                if (node.left == null) {
                    return node.right;
                }
                if (node.right == null) {
                    return node.left;
                }
                let temp = node.right;
                while (temp.left !== null) {
                    temp = temp.left;
                }
                node.data = temp.data;
                node.right = removeNode(node.right, temp.data);
                return node;
            }
            if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            }
            node.right = removeNode(node.right, data);
            return node;
        };
        this.root = removeNode(this.root, data);
    }

    min() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    max() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    minHeight(node = this.root) {
        if (node === null) {
            return -1;
        }
        let left = this.minHeight(node.left);
        let right = this.minHeight(node.right);
        if (left < right) {
            return left + 1;
        }
        return right + 1;
    }

    maxHeight(node = this.root) {
        if (node === null) {
            return -1;
        }
        let left = this.maxHeight(node.left);
        let right = this.maxHeight(node.right);
        if (left > right) {
            return left + 1;
        }
        return right + 1;
    }

    preOrder() {
        if (this.root === null) {
            return null;
        }
        let result = [];
        const traverse = (node) => {
            result.push(node.data);
            node.left && traverse(node.left);
            node.right && traverse(node.right);
        };
        traverse(this.root);
        return result;
    }

    inOrder() {
        if (this.root === null) {
            return null;
        }
        let result = [];
        const traverse = (node) => {
            node.left && traverse(node.left);
            result.push(node.data);
            node.right && traverse(node.right);
        };
        traverse(this.root);
        return result;
    }

    postOrder() {
        if (this.root === null) {
            return null;
        }
        let result = [];
        const traverse = (node) => {
            node.left && traverse(node.left);
            node.right && traverse(node.right);
            result.push(node.data);
        };
        traverse(this.root);
        return result;
    }

    levelOrder() {
        const result = [];
        const queue = new Queue();
        if (this.root !== null) {
            queue.enqueue(this.root);
            while (queue.first()) {
                const node = queue.dequeue();
                result.push(node.data);
                if (node.left !== null) {
                    queue.enqueue(node.left);
                }
                if (node.right !== null) {
                    queue.enqueue(node.right);
                }
            }
            return result;
        }
        return null;
    }

    includes(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            }

            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    balanced() {
        return this.minHeight() >= this.maxHeight() - 1;
    }

    print() {
        return util.inspect(this, {
            showHidden: false,
            depth: null,
            colors: true,
        });
    }
}

export default BinarySearchTree;
