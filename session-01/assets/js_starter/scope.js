var x = 4;
let y = 2;
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunction() {
  x = 7;
  y = 12;
  console.log(`local: ${x}`);
  console.log(`local: ${y}`);
  console.log(`local: ${z}`);

  {
    x = 20;
    y = 30;
    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
  }
}

myFunction();

console.log(`global at end: ${x}`);
console.log(`global at end: ${y}`);
console.log(`global at end: ${z}`);
