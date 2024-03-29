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

/** 3. The Fibonacci sequence is defined as follows: the first number of the
 * sequence is 0, the second number is 1, and the nth number is the sum of the
 * (n - 1)th and (n - 2)th numbers. Write a function that takes in an integer n
 * and returns the nth Fibonacci number. Important note: the Fibonacci sequence
 * is often defined with its first two numbers as F0 = 0 and F1 = 1. For the
 * purpose of this question, the first Fibonacci number is F0; therefore,
 * getNthFib(1) is equal to F0, getNthFib(2) is equal to F1, etc.. */

/** O(n) Space | O(2^n) Time */
function getNthFib1(n) {
    if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else {
        return getNthFib1(n - 1) + getNthFib1(n - 2);
    }
}

/** O(n) Space | O(n) Time */
function getNthFib2(n, memo = { 1: 0, 2: 1 }) {
    if (n in memo) {
        return memo[n];
    } else {
        memo[n] = getNthFib2(n - 1, memo) + getNthFib2(n - 2, memo);
    }
    return memo[n];
}

/** O(1) Space | O(n) Time */
function getNthFib3(n) {
    const lastTwo = [0, 1];
    let counter = 3;
    while (counter <= n) {
        nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;
        counter += 1;
    }
    return n > 1 ? lastTwo[1] : lastTwo[0];
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
function findClosestValueInBst1(tree, target) {
    return findClosestValueInBstHelper(tree, target, Infinity);
}

function findClosestValueInBstHelper(tree, target, closest) {
    if (!tree) {
        return closest;
    }
    const current = tree;
    if (Math.abs(target - current.value) < Math.abs(target - closest)) {
        closest = current.value;
    }
    if (target < current.value) {
        return findClosestValueInBstHelper(current.left, target, closest);
    } else if (target > current.value) {
        return findClosestValueInBstHelper(current.right, target, closest);
    } else {
        return closest;
    }
}

/** O(1) Space | O(logn) or O(n) Time */
function findClosestValueInBst2(tree, target) {
    let current = tree;
    let closest = Infinity;
    while (current) {
        if (Math.abs(target - current.value) < Math.abs(target - closest)) {
            closest = current.value;
        }
        if (target < current.value) {
            current = current.left;
        } else if (target > current.value) {
            current = current.right;
        } else {
            return current.value;
        }
    }
    return closest;
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

/** 9. Write a function that takes in a non-empty string and that returns a boolean
 * representing whether the string is a palindrome. A palindrome is defined as a
 * string that's written the same forward and backward. Note that
 * single-character strings are palindromes. */

/** O(1) Space | O(n) Time */
function isPalindrome(string) {
    let left = 0;
    let right = string.length - 1;
    while (left < right) {
        if (string[left] === string[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
}

/** 10. You're given the head of a Singly Linked List whose nodes are in sorted
 * order with respect to their values. Write a function that returns a modified
 * version of the Linked List that doesn't contain any nodes with duplicate
 * values. The Linked List should be modified in place (i.e., you shouldn't
 * create a brand new list), and the modified Linked List should still have its
 * nodes sorted with respect to their values. Each LinkedList node has an
 * integer value as well as a next property pointing to the next node in the
 * list or to null if it's the tail of the list. */

/** O(1) Space | O(n) Time */
function removeDuplicatesFromLinkedList(linkedList) {
    let current = linkedList;
    let previous = null;
    while (current) {
        if (previous?.value === current.value) {
            previous.next = current.next;
        } else {
            previous = current;
        }
        current = current.next;
    }
    return linkedList;
}

/** 11. Write a function that takes in a string of lowercase English-alphabet
 * letters and returns the index of the string's first non-repeating character.
 * The first non-repeating character is the first character in a string that
 * occurs only once. If the input string doesn't have any non-repeating
 * characters, your function should return -1. */

/** O(1) Space | O(n) Time */
function firstNonRepeatingCharacter(string) {
    const characters = {};
    for (const character of string) {
        /** If a character already occurs in the HashMap, set it to true,
         * otherwise, put it there and set it to false. True as a value of a
         * character stored in the HashMap means that the character occurred
         * more than once in the input string, false means that it occurred
         * exactly once. */
        characters[character] = character in characters;
    }
    for (const character in characters) {
        if (characters[character] === false) {
            return string.indexOf(character);
        }
    }
    return -1;
}

/** 12. Write a function that takes in an array of at least three integers and,
 * without sorting the input array, returns a sorted array of the three largest
 * integers in the input array. The function should return duplicate integers if
 * necessary; for example, it should return [10, 10, 12] for an input array of
 * [10, 5, 9, 10, 12]. */

/** O(1) Space | O(n) Time */
function findThreeLargestNumbers(array) {
    const largestNumbers = new Array(3).fill(-Infinity);
    for (const number of array) {
        if (number > largestNumbers[2]) {
            /** Case 1: a number is larger than the largest number in the
             * largestNumbers array; shift everything to the left and overwrite
             * the largest number. */
            largestNumbers[0] = largestNumbers[1];
            largestNumbers[1] = largestNumbers[2];
            largestNumbers[2] = number;
        } else if (number > largestNumbers[1]) {
            /** Case 2: a number is larger than the middle number in the
             * largestNumbers array; shift first and middle numbers to the
             * left and overwrite the middle number. */
            largestNumbers[0] = largestNumbers[1];
            largestNumbers[1] = number;
        } else if (number > largestNumbers[0]) {
            /** Case 3: a number is larger than the first number in the
             * largestNumbers array; overwrite the first number without shifting
             * anything. */
            largestNumbers[0] = number;
        }
    }
    return largestNumbers;
}

/** 13. You're given a string of available characters and a string representing a
 * document that you need to generate. Write a function that determines if you
 * can generate the document using the available characters. If you can generate
 * the document, your function should return true; otherwise, it should return
 * false. You're only able to generate the document if the frequency of unique
 * characters in the characters string is greater than or equal to the frequency
 * of unique characters in the document string. For example, if you're given
 * characters = "abcabc" and document = "aabbccc" you cannot generate the
 * document because you're missing one c. The document that you need to create
 * may contain any characters, including special characters, capital letters,
 * numbers, and spaces. */

/** O(1) Space | O(n + m) Time */
function generateDocument(characters, document) {
    const availableCharacters = {};
    for (const character of characters) {
        if (character in availableCharacters) {
            availableCharacters[character] += 1;
        } else {
            availableCharacters[character] = 1;
        }
    }
    for (const character of document) {
        if (
            !(character in availableCharacters) ||
            availableCharacters[character] <= 0
        ) {
            return false;
        } else {
            availableCharacters[character] -= 1;
        }
    }
    return true;
}

/** 14. Determine the number of distinct pairs of elements in the array that sum to
 * the target value. For instance, given the array [1, 2, 3, 4, 5, 5, 5, 5, 6,
 * 7, 8, 9, 1, 9], and a target value of 10, the five pairs [1,9], [2,8], [3,7]
 * and [4,6] and [5, 5] all sum to 10. Note that the pair [1, 9] at indexes 0
 * and 11 is indistinct from any other combination of 9 and 1 from indexes 0,
 * 11, 12 and 13. Also, note that [5, 5] pairs from indexes 4, 5, 6 and 7 are
 * indistinct. All permutations creating pairs from these four elements count as
 * one pair as well, e.g. [1, 5] and [5, 1] are considered the same. */

/** O(n) Space | O(n) Time */
function distinctPairs(array, target) {
    const numbers = {};
    const pairs = {};
    let p = 0;
    for (const number of array) {
        const candidate = target - number;
        if (
            candidate in numbers &&
            !([candidate, number] in pairs || [number, candidate] in pairs)
        ) {
            pairs[[candidate, number]] = true;
            p++;
        } else {
            numbers[number] = number;
        }
    }
    return p;
}

/** 15. Given an array of integers between 1 and n, inclusive, where n is the length
 * of the array, write a function that returns the first integer that appears
 * more than once (when the array is read from left to right). In other words,
 * out of all the integers that might occur more than once in the input array,
 * your function should return the one whose first duplicate value has the
 * minimum index. If no integer appears more than once, your function should
 * return -1. Note that you're allowed to mutate the input array. */

/** O(n) Space | O(n) Time */
function firstDuplicateValue1(array) {
    const numbers = {};
    for (const number of array) {
        if (number in numbers) {
            return number;
        } else {
            numbers[number] = true;
        }
    }
    return -1;
}

/** O(1) Space | O(n) Time */
function firstDuplicateValue2(array) {
    for (const number of array) {
        const mappedIndex = Math.abs(number) - 1;
        if (array[mappedIndex] < 0) {
            return Math.abs(number);
        }
        array[mappedIndex] *= -1;
    }
    return -1;
}

/** Hint: We know that all the numbers from the input array are positive (1 to
 * n), and we are allowed to mutate the input array. Therefore, we can use
 * negatives as flags that mark numbers that we have visited. We can then check
 * if a number is a duplicate by mapping it to an index and checking if a number
 * stored at that index is negative. */

/** 16. Write a function that takes in an array of integers and returns a boolean
 * representing whether the array is monotonic. An array is said to be monotonic
 * if its elements, from left to right, are entirely non-increasing or entirely
 * non-decreasing. Non-increasing elements aren't necessarily exclusively
 * decreasing; they simply don't increase. Similarly, non-decreasing elements
 * aren't necessarily exclusively increasing; they simply don't decrease. Note
 * that empty arrays and arrays of one element are monotonic. */

/** O(1) Space | O(n) Time */
function isMonotonic(array) {
    let isIncreasing = null;
    for (let i = 0; i < array.length; i++) {
        if (isIncreasing === null && i > 0 && array[i] !== array[i - 1]) {
            isIncreasing = array[i] > array[i - 1];
            continue;
        }
        if (isIncreasing && array[i] < array[i - 1]) {
            return false;
        } else if (!isIncreasing && array[i] > array[i - 1]) {
            return false;
        }
    }
    return true;
}

/** 17. You're given a Node class that has a name and an array of optional children
 * nodes. When put together, nodes form an acyclic tree-like structure.
 * Implemetnthe depthFirstSearch method on the Node class, which takes in an
 * empty array, traverses the tree using the Depth-first Search approach
 * (specifically navigating the tree from left to right), stores all of the
 * nodes' names in the input array, and returns it. */

/** O(v) Space | O(v + e) Time */
class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    depthFirstSearch(array) {
        array.push(this.name);
        for (const child of this.children) {
            child.depthFirstSearch(array);
        }
        return array;
    }
}
