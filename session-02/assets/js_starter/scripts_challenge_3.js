// Challenge 3 Starter
// Initialise the array
let users = [
  {
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
  },
  {
    firstName: "John",
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
  },
  {
    firstName: "Leif",
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
  },
];
// Check if the array includes the number 5

if (users) {
  // If true, filter
  let filteredUsers = users.filter((user) => user.skills[0] === "JavaScript");
  let mappedUI = filteredUsers.map(
    (user) => (document.getElementById("app").innerHTML = user.fristName)
  );
  // Then square each number in the resulting array
  // Output the final array
  // Output a message if the number 5 is not in the array
}
