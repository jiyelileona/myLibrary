const form = document.querySelector('form');
const addBookButton = document.querySelector('.button');

addBookButton.addEventListener('click', function () {
  form.classList.toggle('open');
  addBookButton.classList.toggle('open');
});
