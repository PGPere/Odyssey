'use strict';

let uname = ['Heidi','Erich','Sergey', 'Israel','Pedro'];
let uscore = [5,10,20,30,50];
let tlabel = ['Player','Score'];

const userTHead = document.querySelector('thead');
const userTableBody = document.querySelector('tbody');

function renderHeader() {
  let tr = document.createElement('tr');
  userTHead.appendChild(tr);
  for (let i = 0; i < tlabel.length; i++) {
  let th= document.createElement('th');
  th.textContent = tlabel[i];
  tr.appendChild(th);
  }
};

function renderTable() {
  let tr = document.createElement('tr');
  userTableBody.appendChild(tr);
  let td = document.createElement('td');
  td.textContent = uname[0];
  tr.appendChild(td);
  // for (let i = 0; i < hours.length-1; i++) {
    let tdcookie = document.createElement('td');
    tdcookie.textContent = uscore[0];
    tr.appendChild(tdcookie);
  // }
};

renderHeader();
renderTable();

