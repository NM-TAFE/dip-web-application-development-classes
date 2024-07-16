// Challenge 5 Solution
// Initialise the array
let numbers = [1, 2, 3, 4, 5];

// // Define the function doubleNumbers
// function doubleNumbers(arr) {
//     let doubled = arr.map((number) => number * 2);

//     return doubled;
// }

let doubleNumbers = (arr) => {arr.map((number) => number * 2)}


// Call the function with the numbers array
let result =  doubleNumbers(numbers);

// Console log the new array
console.log(result);
