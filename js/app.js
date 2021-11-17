'use strict';

const userForm = document.querySelector('form');
let userName = '';
const keyName = 'currentUser';

function handleSubmit(event) {
  event.preventDefault();
  let userNameInput = event.target.userName.value;
  userName = userNameInput;
  sessionStorage.setItem(keyName, userName);
  window.open('quiz.html', '_self'); //quiz.html#quiz
}

if (userForm) {
  userForm.addEventListener('submit', handleSubmit);
}
