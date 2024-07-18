const a = [1, 4, 3, 2, 5];

console.log(a.sort((a, b) => (a > b ? 1 : -1)));
console.log(a.sort((a, b) => a - b));
