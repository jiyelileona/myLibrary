const form = document.querySelector('form');
const addBookButton = document.querySelector('.button');
const submitButton = document.querySelector('#submitButton');
const bookName = document.querySelector('#bookName');
const author = document.querySelector('#author');
const pagesNum = document.querySelector('#pagesNumber');

let library = [];

class Book {
  constructor(bookName, author, pagesNum, isReaded) {
    this.bookName = bookName;
    this.author = author;
    this.pagesNum = pagesNum;
    this.isReaded = isReaded;
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  document.querySelector('input[name = "readed"]:checked').value === 'true' ? true : false;
  let isReaded = document.querySelector('input[name = "readed"]:checked').value;
  const newBook = new Book(bookName.value, author.value, pagesNum.value, isReaded)
  library.push(newBook);
});


addBookButton.addEventListener('click', function () {
  form.classList.toggle('open');
  addBookButton.classList.toggle('open');
});
