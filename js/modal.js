'use strict';

//Modal
let modal = document.getElementById('myModal');
let btn2 = document.getElementById('myBtn');
let span = document.getElementsByClassName('close')[0];

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
