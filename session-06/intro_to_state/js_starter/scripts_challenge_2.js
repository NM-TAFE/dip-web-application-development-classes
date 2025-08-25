let data = {
  books: ["Harry Potter I", "Harry Potter II", "Harry Potter III"],
};

// The template
let template = function (props) {
  let html =
    "<ul>" +
    props.books
      .map(function (book) {
        return "<li>" + book + "</li>";
      })
      .join("") +
    "</ul>";

  return html;
};
// Render the template into the UI
let app = document.querySelector("#list");

// Update the UI
data.books.push("Harry Potter IV");
data.books.push("Harry Potter V");
// data.books.pop();
// data.books[1] = "Harry Potter V";
app.innerHTML = template(data);
