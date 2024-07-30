// Challenge 2 Starter
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

    changeAge(newAge) {
        this.age = newAge;
    }
};

userObject.changeAge(50);
// Clone the complexObject three times using the spread operator to clone.


// Store the cloned objects in an array


// Sort the array of cloned objects based on the 'age' property in ascending order


// Log the sorted array to the console


