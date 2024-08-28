// file: templateLiterals.js

// The following greeting message uses template literals incorrectly.
const getUserInfo = (user) => {
  return "Name: ${user.firstName} ${user.lastName}, Age: ${user.age}";
};

// Fix the template literal syntax.
console.log(getUserInfo(userObject));
