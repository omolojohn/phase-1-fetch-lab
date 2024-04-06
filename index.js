function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
    return fetch('https://anapioficeandfire.com/api/books')
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Convert the response to JSON
            return response.json();
        })
        .then(data => {
            // Call renderBooks function and pass the JSON data
            renderBooks(data);
        })
        .catch(error => {
            console.error('There was a problem fetching the books:', error);
        });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
