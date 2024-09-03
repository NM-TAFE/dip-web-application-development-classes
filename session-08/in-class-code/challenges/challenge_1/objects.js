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

// This function does not navuigate the userObject correctly
function updateAddress(user, newStreet) {
  // console.log(user, newStreet)
    user.address.street = newStreet;
}
  
// Fix the object property assignment.
updateAddress(userObject, "25 Aberdeen Street");
console.log(userObject);
  