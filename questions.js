/** 1. The digital sum of a number n is the sum of its digits. Design and write a
 * recursive algorithm that takes a positive integer n and returns its digital
 * sum. For example, digitalSum(2019) = 12, because 2 + 0 + 1 + 9 = 12 */

function digitalSum(n, m) {
    const array = [...String(n)];
    const i = m ?? array.length - 1;
    if (i === 0) {
        return ~~array[0];
    }
    return ~~array[i] + digitalSum(n, i - 1);
}

/** 2. The factorial of a positive number n, denoted by n! is defined as the
 * product of the integers from 1 to n. Design and write a recursive algorithm
 * that implements the factorial(n). For example, factorial(5) = 5 * 4 * 3 * 2 *
 * 1 = 120 */

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

/** 3. The Fibonacci numbers are 1, 1, 2, 3, 5, 8, 13, 21... The nth Fibonacci
 * number is the sum of the previous two Fibonacci numbers. Design and write a
 * recursive algorithm that determines the nth Fibonacci number. */

function fibonacci(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

/** 4. Write a function that takes in a non-empty array of distinct integers and an
 * integer representing a target sum. If any two numbers in the input array sum
 * up to the target sum, the function should return them in an array, in any
 * order. If no two numbers sum up to the target sum, the function should return
 * an empty array. Note that the target sum has to be obtained by summing two
 * different integers in the array; you can't add a single integer to itself in
 * order to obtain the target sum. You can assume that there will be at most one
 * pair of numbers summing up to the target sum. */

/** O(1) Space | O(n^2) Time */
function twoNumberSum1(array, target) {
    for (n1 of array) {
        for (n2 of array) {
            if (n1 + n2 === target && n1 !== n2) {
                return [n1, n2];
            }
        }
    }
    return [];
}

/** O(n) Space | O(n) Time */
function twoNumberSum2(array, target) {
    const items = {};
    for (const item of array) {
        const candidate = target - item;
        if (candidate in items) {
            return [candidate, item];
        } else {
            items[item] = true;
        }
    }
    return [];
}
/** Hint:
 *  x + y = z <=> y = z - x
 *  x - array item
 *  y - ?
 *  z - target */

/** 5. Given two non-empty arrays of integers, write a function that determines
 * whether the second array is a subsequence of the first one. A subsequence of
 * an array is a set of numbers that aren't necessarily adjacent in the array
 * but that are in the same order as they appear in the array. For instance, the
 * numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the
 * numbers [2, 4]. Note that a single number in an array and the array itself
 * are both valid subsequences of the array. */

/** O(1) Space | O(n) Time */
function isValidSubsequence(array, sequence) {
    let sequenceIndex = 0;
    for (const number of array) {
        if (number === sequence[sequenceIndex]) {
            sequenceIndex++;
        }
        if (sequenceIndex === sequence.length) {
            return true;
        }
    }
    return false;
}

/** 6. Write a function that takes in a non-empty array of integers that are sorted
 * in ascending order and returns a new array of the same length with the
 * squares of the original integers also sorted in ascending order. */

/** O(n) Space | O(n) Time */
function sortedSquaresArray(array) {
    const squares = new Array(array.length).fill(0);
    let left = 0;
    let right = array.length - 1;
    for (let i = array.length - 1; i >= 0; i--) {
        const leftValue = array[left];
        const rightValue = array[right];
        if (Math.abs(leftValue) > Math.abs(rightValue)) {
            squares[i] = leftValue ** 2;
            left++;
        } else {
            squares[i] = rightValue ** 2;
            right--;
        }
    }
    return squares;
}

/** 7. Write a function that takes in a Binary Search Tree (BST) and a target
 * integer value and returns the closest value to that target value contained in
 * the BST. */

/** O(logn) or O(n) Space | O(logn) or O(n) Time */
function findClosestValueInBst(tree, target) {
    return findClosestValueInBstHelper(tree, target, Infinity);
}

function findClosestValueInBstHelper(tree, target, closest) {
    if (!tree) {
        return closest;
    }
    const current = tree.value;
    if (Math.abs(target - current) < Math.abs(target - closest)) {
        closest = current;
    }
    if (target < current) {
        return findClosestValueInBstHelper(tree.left, target, closest);
    } else if (target > current) {
        return findClosestValueInBstHelper(tree.right, target, closest);
    } else {
        return closest;
    }
}

/** 8. Write a BST class for a Binary Search Tree. The class should support:
 * - Inserting values with the insert method.
 * - Removing values with the remove method; this method should only remove the
 *   first instance of a given value.
 * - Searching for values with the contains method. */

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    /** O(1) Space | O(logn) or O(n) Time */
    insert(value) {
        let current = this;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = new BST(value);
                    break;
                } else {
                    current = current.left;
                }
            } else {
                if (!current.right) {
                    current.right = new BST(value);
                    break;
                } else {
                    current = current.right;
                }
            }
        }
        return this;
    }

    /** O(1) Space | O(logn) or O(n) Time */
    contains(value) {
        let current = this;
        while (current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    /** O(1) Space | O(logn) or O(n) Time */
    remove(value, parent = null) {
        let current = this;
        while (current) {
            /** Search for a node to be removed. */
            if (value < current.value) {
                parent = current;
                current = current.left;
            } else if (value > current.value) {
                parent = current;
                current = current.right;
            } else {
                /** After finding the node to be removed. */
                if (current.left && current.right) {
                    /** Case 1: the node to be removed has two child nodes. */
                    current.value = current.right.getMinValue();
                    current.right.remove(current.value, current);
                } else if (!parent) {
                    /** Case 2: the node to be removed is a root node. */
                    if (current.left) {
                        current.value = current.left.value;
                        current.right = current.left.right;
                        current.left = current.left.left;
                    } else if (current.right) {
                        current.value = current.right.value;
                        current.left = current.right.left;
                        current.right = current.right.right;
                    } else {
                        /** The root node has no child nodes. */
                        current = null;
                    }
                } else if (parent.left === current) {
                    /** Case 3: the node to be removed has one child node on the left. */
                    parent.left = current.left ? current.left : current.right;
                } else if (parent.right === current) {
                    /** Case 4: the node to be removed has one child node on the right. */
                    parent.right = current.left ? current.left : current.right;
                }
                /** Break out of the loop after finding the node to be removed. */
                break;
            }
        }
        return this;
    }

    /** O(1) Space | O(logn) or O(n) Time */
    getMinValue() {
        let current = this;
        while (current.left) {
            current = current.left;
        }
        return current.value;
    }
}
