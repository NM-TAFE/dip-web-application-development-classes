// Challenge - Stage 1
let addBook = function (book) {
  // If there's no book to do, do nothing
  // data
  if (!book || book.length < 1) return;

  // Get the list
  // Create a new list item
  let list = document.querySelector("#list");

  // template
  let listItem = document.createElement("li");
  // Append the item to the list
  listItem.textContent = book;
  // render
  list.appendChild(listItem);
};

let book = "Harry Potter IV";
let book1 = "Harry Potter III";

addBook(book);
addBook(book1);
