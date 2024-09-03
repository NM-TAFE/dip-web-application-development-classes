// Convert the following code to an arrow function assigned to a getFull name variable
// function getFullName() {
//   return user.firstName + " " + user.lastName;
// }

const userObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Perth",
    zipCode: "6000",
  },
  skills: ["JavaScript", "HTML", "CSS"],
  socialProfiles: {
    twitter: "@johndoe",
    linkedIn: "linkedin.com/in/johndoe",
  },
  isEmployed: true,
};

const getFullName =  (user) => user.firstName + " " + user.lastName

// Fix this code using an arrow function.
console.log(getFullName(userObject));
