const users = [
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
    firstName: "Gun",
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

const userObjectComponent = ({ isEmployed, firstName, age, changeAge }) =>
  `<li>${firstName} is ${isEmployed ? "Well done" : "Your lecturer is rubbish"} but you are only ${age}</li>`;

let usersTemplate = users.map((user) => userObjectComponent(user));

let samsComponent = class userObjectComponent {
  constructor(firstName, age, isEmployed) {
    const firstName = this.firstName;
    const age = this.age;
    const isEmployed = this.isEmployed;
    function changeUserAge() {
      return (age += 1);
    }
  }
};

let eddricksComponent = function (firstName, age, isEmployed) {
  function changeUserAge() {
    return (age += 1);
  }
  return `${firstName} is ${isEmployed ? "Well done" : "Your lecturer is rubbish"} but you are only ${age}`;
};

export default eddricksComponent;
