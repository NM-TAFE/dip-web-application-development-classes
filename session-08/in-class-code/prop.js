// An example props object
const props = {
  // apodData represents the apodData component properties
  apodData: {
    title: "Astronomy Picture of the Day",
    date: "2024-08-21",
    url: "https://example.com/image.jpg",
    explanation: "This is a description of the image.",
  },
  // We can pass functions in props
  showAlert: () => console.log("Title: Astronomy Picture of the Day"),
};

// Destructuring apodData for easier access
const { title, date, url, explanation } = apodData;

// Logging values to the console
console.log("Title:", title);
console.log("Date:", date);
console.log("URL:", url);
console.log("Explanation:", explanation);

// Using showAlert function passed via props
showAlert();
