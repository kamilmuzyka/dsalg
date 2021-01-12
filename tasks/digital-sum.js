// The digital sum of a number n is the sum of its digits.
// Design and write a recursive algorithm
// that takes a positive integer n and returns its digital sum.
// For example, digitalSum(2019) = 12, because 2 + 0 + 1 + 9 = 12

function digitalSum(n, m) {
    const array = [...String(n)];
    const i = m ?? array.length - 1;
    if (i === 0) {
        return ~~array[0];
    }
    return ~~array[i] + digitalSum(n, i - 1);
}

export default digitalSum;
