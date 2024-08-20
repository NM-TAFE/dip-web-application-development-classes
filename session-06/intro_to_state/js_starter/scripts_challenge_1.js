// Challenge - Stage 1
let addBook = function (book) {
    // If there's no book to do, do nothing
    // data
    if (!book || book.length < 1) return;
    // Get the list
    let list = document.querySelector('#app');
    // Create a new list item
    // template
    let listItem = document.createElement('p');
    // Append the item to the list
    // render
    list.appendChild(listItem)
};

let book = "Harry Potter IV"

addBook(book)




