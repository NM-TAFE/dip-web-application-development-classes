let data = [
  {
    firstName: "Joghn",
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
  },
  {
    firstName: "Vu",
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
  },
  {
    firstName: "Deepak",
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
  },
];

export default data;
