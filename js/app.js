'use strict';

function TestsFunction() {
  let T = document.getElementById('down');
  T.style.display = 'block';
  displayHidden();
  arrowRemover();
}

const arrowIcon = document.getElementById('arrowicon');

function arrowRemover() {
  arrowIcon.innerHTML = ' ';
}

arrowIcon.addEventListener('click', arrowRemover);

function displayHidden() {
  document.querySelector('.hidden').style.display = 'flex';
  document.getElementById('image').style.height = '400px';
}
