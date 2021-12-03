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

/** O(1) Space and O(n^2) Time */
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

/** O(n) Space and O(n) Time */
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
