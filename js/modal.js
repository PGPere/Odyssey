'use strict';

//Modal
const userForm = document.querySelector('form');
let modal = document.getElementById('myModal');
let btn2 = document.getElementById('myBtn');
let btn3 = document.getElementById('button2');
let span = document.getElementsByClassName('close')[0];
let userName = '';
const keyNameModal = 'currentUser';

btn3.onclick = function () {
  modal.style.display = 'block';
  return false;
};

btn2.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

function handleSubmit(event) {
  event.preventDefault();
  let userNameInput = event.target.userName.value;
  userName = userNameInput;
  localStorage.setItem(keyNameModal, userName);
  console.log(userName);
  window.open('quiz.html#quizheader', '_self');
}

if (userForm) {
  userForm.addEventListener('submit', handleSubmit);
}
