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
};

// An example props object
const props = {
  apodData: {
    title: "Astronomy Picture of the Day",
    date: "2024-08-21",
    url: "https://example.com/image.jpg",
    explanation: "This is a description of the image.",
  },
  // We can pass function in props
  showAlert: () => alert("Title: 	Astronomy Picture of    	the 	Day"),
};
