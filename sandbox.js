/** 4. Write a function that takes in a non-empty array of distinct integers and an
 * integer representing a target sum. If any two numbers in the input array sum
 * up to the target sum, the function should return them in an array, in any
 * order. If no two numbers sum up to the target sum, the function should return
 * an empty array. Note that the target sum has to be obtained by summing two
 * different integers in the array; you can't add a single integer to itself in
 * order to obtain the target sum. You can assume that there will be at most one
 * pair of numbers summing up to the target sum. (09.12.2021) */

function twoNumberSum(array, target) {}

/** 5. Given two non-empty arrays of integers, write a function that determines
 * whether the second array is a subsequence of the first one. A subsequence of
 * an array is a set of numbers that aren't necessarily adjacent in the array
 * but that are in the same order as they appear in the array. For instance, the
 * numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the
 * numbers [2, 4]. Note that a single number in an array and the array itself
 * are both valid subsequences of the array. (09.12.2021) */

function isValidSubsequence(array, sequence) {}

/** 6. Write a function that takes in a non-empty array of integers that are sorted
 * in ascending order and returns a new array of the same length with the
 * squares of the original integers also sorted in ascending order. (09.12.2021) */

function sortedSquaresArray(array) {}

/** 7. Write a function that takes in a Binary Search Tree (BST) and a target
 * integer value and returns the closest value to that target value contained in
 * the BST. */

function findClosestValueInBst(tree, target) {}

/** 9. Write a function that takes in a non-empty string and that returns a boolean
 * representing whether the string is a palindrome. A palindrome is defined as a
 * string that's written the same forward and backward. Note that
 * single-character strings are palindromes. */

function isPalindrome(string) {}

/** 10. You're given the head of a Singly Linked List whose nodes are in sorted
 * order with respect to their values. Write a function that returns a modified
 * version of the Linked List that doesn't contain any nodes with duplicate
 * values. The Linked List should be modified in place (i.e., you shouldn't
 * create a brand new list), and the modified Linked List should still have its
 * nodes sorted with respect to their values. Each LinkedList node has an
 * integer value as well as a next property pointing to the next node in the
 * list or to null if it's the tail of the list. */

function removeDuplicatesFromLinkedList(linkedList) {}

/** 11. Write a function that takes in a string of lowercase English-alphabet
 * letters and returns the index of the string's first non-repeating character.
 * The first non-repeating character is the first character in a string that
 * occurs only once. If the input string doesn't have any non-repeating
 * characters, your function should return -1. */

function firstNonRepeatingCharacter(string) {}

/** 12. Write a function that takes in an array of at least three integers and,
 * without sorting the input array, returns a sorted array of the three largest
 * integers in the input array. The function should return duplicate integers if
 * necessary; for example, it should return [10, 10, 12] for an input array of
 * [10, 5, 9, 10, 12]. */

function findThreeLargestNumbers(array) {}

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

function generateDocument(characters, document) {}
