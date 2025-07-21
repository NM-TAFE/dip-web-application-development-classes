// Challenge 6 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5];

// Define the arrow function doubleNumbers

function doubleNumbers(numbers) {
    a = numbers
    let doubled = a.map((number) => number * 2);
    return doubled;
}




// Call the function with the numbers array

let result = doubleNumbers(numbers);

// Console log the new array
console.log(result);
