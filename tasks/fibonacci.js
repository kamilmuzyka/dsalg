// The Fibonacci numbers are 1, 1, 2, 3, 5, 8, 13, 21...
// The nth Fibonacci number is the sum of the previous two Fibonacci numbers.
// Design and write a recursive algorithm that determines the nth Fibonacci number.

function fibonacci(n) {
    if (n === 1 || n === 2)  {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = fibonacci;