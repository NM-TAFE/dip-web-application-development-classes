// Challenge 1 Starter
const userObject = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    address: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345"
    },
    skills: ["JavaScript", "HTML", "CSS"],
    socialProfiles: {
        twitter: "@johndoe",
        linkedIn: "linkedin.com/in/johndoe"
    },
    isEmployed: true,

    // Method to change the age property
    changeAge(newAge) {
        this.age = newAge;
    }
};

// Execute the method to change the age
userObject.changeAge(50);

// Log the updated complexObject
console.log(userObject);


