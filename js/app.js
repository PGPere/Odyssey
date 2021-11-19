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
// const userAsnwer = documet.querySelector('input');
let btn = document.getElementById('submit');
const labela = document.getElementById('atext');
const labelb = document.getElementById('btext');
const labelc = document.getElementById('ctext');
const labeld = document.getElementById('dtext');
const answers = document.querySelectorAll('.answer');
let flag = document.querySelector('#quizheader img:nth-child(2)');
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
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  this.correct = correct;
  questionsArray.push(this);
}

new QuestionConstructor(
  'What country does this flag represent?',
  'phillipines',
  'Ukraine',
  'Tonga',
  'Slovenia',
  'Phillipines',
  'd'
);
new QuestionConstructor(
  'test1',
  'test2',
  'test3',
  'test4',
  'test5',
  'test6',
  'test7'
);

function renderQuiz() {
  let currentQuizQuestion = questionsArray[currentQuestion];
  flag.src = questionsArray[currentQuestion].src;
  console.log(flag);
  quizquestion.innerHTML = questionsArray[currentQuestion].question;
  labela.innerHTML = questionsArray[currentQuestion].a;
  labelb.innerHTML = questionsArray[currentQuestion].b;
  labelc.innerHTML = questionsArray[currentQuestion].c;
  labeld.innerHTML = questionsArray[currentQuestion].d;
}

renderQuiz();
// Stores users answer
function selectedAnswer() {
  let answer = undefined;

  answers.forEach((answersi) => {
    if (answers.checked) {
      answer = answersi.id;
    }
  });
  return answer;
}

// Checks to see if user has selected an answer
function allowSubmit() {
  // if (document.getElementById('a').checked) {
    // currentQuestion++;
    // renderQuiz();
  // } else if (document.getElementById('b').checked) {
    // currentQuestion++;
    // renderQuiz();
  // } else if (document.getElementById('c').checked) {
    // currentQuestion++;
    // renderQuiz();
  // } else if (document.getElementById('d').checked) {
    // currentQuestion++;
    // renderQuiz();
  // } else {
  //   alert('Please select an answer');
  // }
}

btn.addEventListener('click', () => {
  if (currentQuestion < questionsArray.length) {
    // allowSubmit();
  }
  const selectedElement = document.querySelector('input[name="answer"]:checked');
  selectedElement.checked = false;
  if (selectedElement.value === questionsArray[currentQuestion].correct) {
    score++;
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



