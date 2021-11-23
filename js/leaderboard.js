'use strict';

// Create Leaderscore Info
const keyName = 'currentUser';
const tally = 'puntos';
let leaderInfo = [];

let leaderInformation = localStorage.getItem('linfo');
if (leaderInformation) {
  let parseleaderInfo = JSON.parse(leaderInformation);
  for (let linfo of parseleaderInfo) {
    let name = linfo.name;
    let score = linfo.score;
    makeleaderScoreInfo(name, score);
  }
}

let tlabel = ['Player', 'Score'];

let storeName = localStorage.getItem(keyName);
let scoresession = localStorage.getItem(tally);
localStorage.removeItem(keyName);
localStorage.removeItem(tally);

console.log(storeName + scoresession);

if (storeName !== null && scoresession !== null) {
  makeleaderScoreInfo(storeName, scoresession);
}

function LeaderScoreInfo(name, score) {
  this.name = name;
  this.score = score;
}

function makeleaderScoreInfo(name, score) {
  let ScoreObj = new LeaderScoreInfo(name, score);
  leaderInfo.push(ScoreObj);
}

storeLeaderscore();

function storeLeaderscore() {
  let stringifiedleaderinfo = JSON.stringify(leaderInfo);
  localStorage.setItem('linfo', stringifiedleaderinfo);
}

const userTHead = document.querySelector('thead');
const userTableBody = document.querySelector('tbody');

function renderHeader() {
  let tr = document.createElement('tr');
  userTHead.appendChild(tr);
  for (let i = 0; i < tlabel.length; i++) {
    let th = document.createElement('th');
    th.textContent = tlabel[i];
    tr.appendChild(th);
  }
}

function renderTable() {
  for (let i = 0; i < leaderInfo.length; i++) {
  let tr = document.createElement('tr');
  userTableBody.appendChild(tr);
  let td = document.createElement('td');
  if (i == 0) {
  td.textContent = '👑 ' +leaderInfo[i].name+ ' 👑';
  } else {
  td.textContent = leaderInfo[i].name;
  }
  tr.appendChild(td);
  let tdcookie = document.createElement('td');
  tdcookie.textContent = leaderInfo[i].score;
  tr.appendChild(tdcookie);
  }
}

leaderInfo.sort((a, b) => b.score - a.score);

renderHeader();
renderTable();
