import multiply, { add, subtract, divide as myDivide } from "./math.js";

// console.log(add(3, 2)); // 5
// console.log(subtract(5, 2)); // 3
// console.log(myDivide(6, 3)); // 2
// console.log(multiply(6, 2)); // 12

let add_result = add(3, 2); // 5
let subtract_result = subtract(5, 2); // 3
let divide_result = myDivide(6, 3); // 2
let multiply_result = multiply(6, 2); // 12

let results = [add_result, subtract_result, divide_result, multiply_result];
// results = [add(3, 2), subtract(5, 2), myDivide(6, 3), multiply(6, 2)];

let app = document.getElementById("results");

let show = true;

show
  ? (app.innerHTML = `<ol>${results
      .map((result) => `<li>${result}</li>`)
      .join("")}
      </ol>`)
  : `<div>Nothing to show</div>`;
