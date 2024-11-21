// Seleccionar elementos del DOM
const bookForm = document.getElementById('bookForm');
const bookDetails = document.getElementById('bookDetails');
const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const bookYear = document.getElementById('bookYear');

// Manejar el evento de envío del formulario
bookForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar recargar la página

    // Capturar valores de los campos del formulario
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;

    // Mostrar la información del libro en la sección de detalles
    bookTitle.textContent = title;
    bookAuthor.textContent = author;
    bookYear.textContent = year;

    // Mostrar la sección de detalles del libro
    bookDetails.style.display = 'block';
});
