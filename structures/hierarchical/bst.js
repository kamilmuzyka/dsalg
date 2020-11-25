import util from 'util';

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
        }
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

    print() {
        return util.inspect(this, {
            showHidden: false,
            depth: null,
            colors: true
        });
    }
}

export default BinarySearchTree;