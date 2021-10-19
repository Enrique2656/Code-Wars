// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

function isDivisible(n, x, y) {
    if(n % x === 0 && n % y === 0){
    return true;}
    else if (n % x >= 1 || n % y >= 1) {
    return false;}
    }