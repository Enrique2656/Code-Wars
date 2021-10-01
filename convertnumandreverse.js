// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// example: 348597 => [7,9,5,8,4,3]


function digitize(n) {
    const arr = (n.toString().split('').reverse())
    return(arr).map(element => Number(element))
 }