const userObject = {
  firstName: "Aldus",
  lastName: "Huxley",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Perth",
    zipCode: "6000",
  },
  skills: ["JavaScript", "HTML", "CSS"],
  socialProfiles: {
    twitter: "@aldus",
    linkedIn: "linkedin.com/in/ahuxley",
  },
  isEmployed: true,
  changeAge: function () {
    return (this.age += 1);
  },
  changeArrowAge: () => {
    this.age += 1;
  },
};

console.log(userObject.changeAge()); // The object.
console.log(userObject.changeArrowAge()); // The object.
// console.log(userObject.firstName); // Output: Aldus
// console.log(userObject.address.city); // Output: Perth
// console.log(userObject.skills[0]); // Output: JavaScript
// console.log(userObject.socialProfiles.twitter); // Output: @aldus

const userObject2 = {
  firstName: "Aldus",
  lastName: "Huxley",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Perth",
    zipCode: "6000",
  },
  skills: ["JavaScript", "HTML", "CSS"],
  socialProfiles: {
    twitter: "@aldus",
    linkedIn: "linkedin.com/in/ahuxley",
  },
  isEmployed: true,
  changeAge: function () {
    return (this.age += 1);
  },
  changeArrowAge: () => (this.age += 1),
};

const userObjectComponent = ({ isEmployed, firstName, age, changeAge }) => {
  console.log(
    `${firstName} is ${isEmployed ? "Well done" : "Your lecturer is rubbish"} but you are only ${age}`,
  );
};
