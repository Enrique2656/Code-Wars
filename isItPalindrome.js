// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(raceCar) {
    const lowerCase = raceCar.toLowerCase();
    const normal = lowerCase
    const reverse = lowerCase.split("").reverse().join("");
    return normal === reverse;
    }