const userObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Perth",
    zipCode: "6000"
  },
  skills: ["JavaScript", "HTML", "CSS"],
  socialProfiles: {
    twitter: "@johndoe",
    linkedIn: "linkedin.com/in/johndoe"
  },
  isEmployed: true
};

console.log(userObject.firstName); // Output: John
console.log(userObject.address.city); // Output: Anytown
console.log(userObject.skills[0]); // Output: JavaScript
console.log(userObject.socialProfiles.twitter); // Output: @johndoe

userObject.firstName = "Xavier";
userObject["url"] = "https://www.9thlevel.com";
delete userObject["url"];


userObject["fullNamefunction"] = (firstName, lastName) => {
  console.log(`${firstName} ${lastName}`);
};

userObject.fullNamefunction(userObject.firstName, userObject.lastName);

// userObject["fullAddressfunction"] = ({ street, city, postCode }) => {
//   console.log(`${street}, ${city}, ${postCode}`);
// };

// userObject.fullAddressfunction(userObject.address);

userObject["fullAddressfunction"] = function () {
  console.log(
    `This: ${this}``This address: ${this.address.street}, ${this.address.city}, ${this.address.postCode}`
  );
};

userObject.fullAddressfunction();