// Ternary operator examples
// if condition is true
//     assign value1 to result
// else
//     assign value2 to result

let age = 18;
let canVote = age >= 18 ? "Yes" : "No";

console.log(canVote); // Output: 'Yes'

// if isMember is true
//     assign 'Welcome back!' to message
// else
//     assign 'Sign up now!' to message

let isMember = true;
let message = isMember ? "Welcome back!" : "Sign up now!";

console.log(message); // Output: 'Welcome back!'

// if userType is 'admin'
//     call adminFunction
// else
//     call userFunction

function adminFunction() {
  return "Admin access granted";
}

function userFunction() {
  return "User access granted";
}

let userType = "admin";
let accessMessage = userType === "admin" ? adminFunction() : userFunction();

console.log(accessMessage); // Output: 'Admin access granted'

// if isLoggedIn is true
//     set status to 'Online'
// else
//     set status to 'Offline'

let isLoggedIn = false;
let userStatus = {
  status: isLoggedIn ? "Online" : "Offline",
};

console.log(userStatus.status); // Output: 'Offline'

// if isAscending is true
//     sort array in ascending order
// else
//     sort array in descending order

let numbers = [4, 2, 7, 1, 5];
let isAscending = false;

numbers.sort((a, b) => (isAscending ? a - b : b - a));

console.log(numbers); // Output: [7, 5, 4, 2, 1]
