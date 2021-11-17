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

const quiz = document.getElementById('quiz');
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

function questionConstructor(
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

new questionConstructor(
  'What country does this flag represent?',
  'phillipines',
  'Ukraine',
  'Tonga',
  'Slovenia',
  'Phillipines',
  'd'
);
new questionConstructor(
  'test2',
  'test2',
  'test2',
  'test2',
  'test2',
  'test2',
  'test2'
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
  console.log(answer);
}

// Checks to see if user has selected an answer
function allowSubmit() {
  if (document.getElementById('a').checked) {
    currentQuestion++;
    renderQuiz();
  } else if (document.getElementById('b').checked) {
    currentQuestion++;
    renderQuiz();
  } else if (document.getElementById('c').checked) {
    currentQuestion++;
    renderQuiz();
  } else if (document.getElementById('d').checked) {
    currentQuestion++;
    renderQuiz();
  } else {
    alert('Please select an answer');
  }
}

btn.addEventListener('click', () => {
  if (currentQuestion < questionsArray.length) {
    allowSubmit();
  }
  document.querySelector('input[name="answer"]:checked').checked = false;
});
