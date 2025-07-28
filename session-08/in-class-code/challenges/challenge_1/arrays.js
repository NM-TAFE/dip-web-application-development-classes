const user = {
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
  // Function to calculate membership status
  calculateMembershipStatus: function () {
    if (this.age >= 18 && !this.isStudent) {
      return "Full Member";
    } else if (this.age >= 18 && this.isStudent) {
      return "Student Discount";
    } else {
      return "Not Eligible for Discount";
    }
  },
};

// The following code tries to add a new skill to the user's skills array but has an error.
const addSkill = (user, skill) => {
  user.skills = skill;
};

// Fix the array method usage.
addSkill(user, "React");
console.log(user.skills);
