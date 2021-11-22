'use strict';

function TestsFunction() {
  var T = document.getElementById('down');
  T.style.display = 'block';
}

const arrowIcon = document.getElementById('arrowicon');

function arrowRemover() {
  arrowIcon.innerHTML = ' ';
}

arrowIcon.addEventListener('click', arrowRemover);
