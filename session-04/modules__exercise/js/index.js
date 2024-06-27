// Moularisation Exercise.js

// Method to handle the Click Me button click event
function handleClickMeButton() {
  const button = document.getElementById("button1");
  button.addEventListener("click", function () {
    alert("Button Clicked!");
  });
}

// Method to handle the Hover Over Me button hover event
function handleHoverButton() {
  const button = document.getElementById("button2");
  button.addEventListener("mouseover", function () {
    alert("Button Hovered Over!");
  });
}

// Method to handle the Double Click Me button double click event
function handleDoubleClickButton() {
  const button = document.getElementById("button3");
  button.addEventListener("dblclick", function () {
    alert("Button Double Clicked!");
  });
}

// Method to add a post to the post container
function addPost(title, content) {
  const postContainer = document.getElementById("postContainer");
  const post = document.createElement("div");
  post.className = "post";

  const postTitle = document.createElement("h3");
  postTitle.textContent = title;

  const postContent = document.createElement("p");
  postContent.textContent = content;

  post.appendChild(postTitle);
  post.appendChild(postContent);
  postContainer.appendChild(post);
}

// Method to dynamically add a list of books to the sidebar
function addBooks(books) {
  const booksContainer = document.createElement("aside");
  booksContainer.className = "section subtitle is-5 has-text-primary";

  const bookList = document.createElement("ul");
  bookList.id = "list";

  books.forEach(function (book) {
    const listItem = document.createElement("li");
    listItem.textContent = book;
    bookList.appendChild(listItem);
  });

  booksContainer.appendChild(bookList);
  const container = document.querySelector(".container");
  container.appendChild(booksContainer);
}

// Method to initialise the app
function initialiseApp() {
  handleClickMeButton();
  handleHoverButton();
  handleDoubleClickButton();

  // Add some sample posts
  addPost("First Post", "This is the content of the first post.");
  addPost("Second Post", "This is the content of the second post.");

  // Add some sample books
  const books = ["Harry Potter I", "Harry Potter II", "Harry Potter III"];
  addBooks(books);
}

// Initialise the app when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initialiseApp);
