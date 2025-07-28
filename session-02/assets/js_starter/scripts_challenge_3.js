// Challenge 3 Starter
// Initialise the array
users = [
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
        firstName: "Byron",
        lastName: "Nelson",
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
        firstName: "Amelia",
        lastName: "Earhardt",
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
        firstName: "Dennis",
        lastName: "The Mennace",
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
        firstName: "Marie",
        lastName: "Curie",
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
    }
]
// Check if the array includes the number 5
let filterUsers = users.filter(user => user.skills[0] === "JavaScript")

let onlyStudents = filterUsers.map(
    user => {
        document.getElementById('OutputField').innerHTML += `<li>${user.firstName}</li>`
    })
// If true, filter out numbers less than 5

// Then square each number in the resulting array

// Output the final array

// Output a message if the number 5 is not in the array
