const form = document.querySelector('form');
const addBookButton = document.querySelector('.button');
const submitButton = document.querySelector('#submitButton');
const bookName = document.querySelector('#bookName');
const author = document.querySelector('#author');
const pagesNum = document.querySelector('#pagesNumber');
const books = document.querySelector('#library');
let library = [];

class Book {
  constructor(bookName, author, pagesNum, isReaded) {
    this.bookName = bookName;
    this.author = author;
    this.pagesNum = pagesNum;
    this.isReaded = isReaded;
  }
}

function checkFormValidation() {
  if (bookName.value.length === 0 || author.value.length === 0 || pagesNum.value.length === 0) {
    alert('Please fill all the fields');
    return;
  } else {
    document.querySelector('input[name = "readed"]:checked').value === 'true' ? true : false;
    let isReaded = document.querySelector('input[name = "readed"]:checked').value;
    const newBook = new Book(bookName.value, author.value, pagesNum.value, isReaded);
    library.push(newBook);
  }
}

function clearForm() {
  bookName.value = '';
  author.value = '';
  pagesNum.value = '';
}

function updateLocalStorage() {
  localStorage.setItem('library', JSON.stringify(library));
}

function checkLocalStorage() {
  if (localStorage.getItem('library')) {
    library = JSON.parse(localStorage.getItem('library'));
  } else {
    library = [];
  }
}

function render() {
  checkLocalStorage();
  console.log(library);
  books.innerHTML = '';
  library.forEach(book => {
    const bookHTLM = `
      <div class="book">
        <button id="delete">❌</button>
        <div id="bookName">${book.bookName}</div>
        <div id="author">${book.author}</div>
        <div id="pagesNum">${book.pagesNum}</div>
        <button>${book.isReaded}</button>
      </div>
    `;
    books.innerHTML += bookHTLM;
  });
}

render();

form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkFormValidation();
  updateLocalStorage();
  clearForm();
  render();
});

addBookButton.addEventListener('click', function () {
  form.classList.toggle('open');
  addBookButton.classList.toggle('open');
});
