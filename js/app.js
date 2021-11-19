'use strict';

const userForm = document.querySelector('form');
let userName = '';
const keyName = 'currentUser';

function handleSubmit(event) {
  event.preventDefault();
  let userNameInput = event.target.userName.value;
  userName = userNameInput;
  sessionStorage.setItem(keyName, userName);

  console.log(userName);
  window.open('quiz.html#quizheader', '_self'); 
  //quiz.html#quiz
}

if (userForm) {
  userForm.addEventListener('submit', handleSubmit);
}

const quiz = document.getElementById('quiz');
let btn = document.getElementById('submit');
const labela = document.getElementById('atext');
const labelb = document.getElementById('btext');
const labelc = document.getElementById('ctext');
const labeld = document.getElementById('dtext');
const answers = document.querySelectorAll('.answer');
let flag = document.querySelector('.front-face');
let backCard = document.querySelector('.back-face');
const quizquestion = document.getElementById('quizquestion');
let questionsArray = [];
let score = 0;
let currentQuestion = 0;

function QuestionConstructor(
  question,
  country,
  a,
  b,
  c,
  d,
  correct,
  fileExtension = 'svg'
) {
  this.question = question;
  this.country = country;
  this.src = `images/flag-images/${country}.${fileExtension}`;
  this.back = `images/back-images/${country}.png`;
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  this.correct = correct;
  questionsArray.push(this);
}

new QuestionConstructor(
  'What country does this flag represent?',
  'slovenia', //img src
  'Ukraine',
  'Tonga',
  'Slovenia',
  'Phillipines',
  'c' //correct answer
);
new QuestionConstructor(
  'What country does this flag represent?',
  'tonga', //img src
  'Ukraine',
  'Tonga',
  'Slovenia',
  'Phillipines',
  'b' //correct answer
);
new QuestionConstructor(
  'What country does this flag represent?',
  'tuvalu', //img src
  'Ukraine',
  'Question3',
  'Slovenia',
  'Tuvalu',
  'd' //correct answer
);
new QuestionConstructor(
  'What country does this flag represent?',
  'cameroon', //img src
  'Ukraine',
  'Cameroon',
  'Slovenia',
  'Tuvalu',
  'b' //correct answer
);
new QuestionConstructor(
  'What country does this flag represent?',
  'ukraine', //img src
  'Ukraine',
  'Cameroon',
  'Slovenia',
  'Tuvalu',
  'a' //correct answer
);

function renderQuiz() {
  let currentQuizQuestion = questionsArray[currentQuestion];
  flag.src = questionsArray[currentQuestion].src;
  backCard.src = questionsArray[currentQuestion].back;
  console.log(flag);
  quizquestion.innerHTML = questionsArray[currentQuestion].question;
  labela.innerHTML = questionsArray[currentQuestion].a;
  labelb.innerHTML = questionsArray[currentQuestion].b;
  labelc.innerHTML = questionsArray[currentQuestion].c;
  labeld.innerHTML = questionsArray[currentQuestion].d;
}

renderQuiz();

btn.addEventListener('click', () => {
  const selectedElement = document.querySelector(
    'input[name="answer"]:checked'
  );
  
  selectedElement.checked = false;
  if (selectedElement.value === questionsArray[currentQuestion].correct) {
    score++;
  }

  if (currentQuestion === questionsArray.length - 1) {
    alert("You're done!");
    quiz.innerHTML = '';
  }
  console.log(questionsArray[currentQuestion].correct);
  console.log(score);
  currentQuestion++;
  renderQuiz();
});


// Create Leaderscore Info

let leaderInfo =[]

let storeName = sessionStorage.getItem(keyName);

console.log(storeName);

let z = {name:storeName,
        tally: score}

leaderInfo.push(z);

console.log(leaderInfo);

// Local Storage of Leaderscore Information
function storeLeaderscore() {
  let stringifiedProducts = JSON.stringify(leaderInfo);
  localStorage.setItem('linfo', stringifiedProducts);
}

storeLeaderscore();

