// The factorial of a positive number n, denoted by n!
// is defined as the product of the integers from 1 to n.
// Design and write a recursive algorithm that implements the factorial(n).
// For example, factorial(5) = 5 * 4 * 3 * 2 * 1 = 120

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

export default factorial;