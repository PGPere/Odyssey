'use strict';

const userForm = document.querySelector('form');
let userName = '';
const keyName = 'currentUser';


function handleSubmit(event) {
  event.preventDefault();
  let userNameInput = event.target.userName.value;
  userName = userNameInput;
  sessionStorage.setItem(keyName, userName);
  window.open('quiz.html#quizheader', '_self'); //quiz.html#quiz
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
console.log(answers);
let flag = document.querySelector('#quizheader img:nth-child(2)');
console.log(flag);
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

let testQuestion = new QuestionConstructor(
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
  console.log(flag);
  flag.src = questionsArray[currentQuestion].src;
  quizquestion.innerHTML = questionsArray[currentQuestion].question;
  labela.innerHTML = questionsArray[currentQuestion].a;
  labelb.innerHTML = questionsArray[currentQuestion].b;
  labelc.innerHTML = questionsArray[currentQuestion].c;
  labeld.innerHTML = questionsArray[currentQuestion].d;
}

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





function TestsFunction() {
  var T = document.getElementById("down");
  T.style.display = "block";  

};

const arrowIcon= document.getElementById('arrowicon');


function arrowRemover(){
  arrowIcon.innerHTML = ' ';
}

arrowIcon.addEventListener('click',arrowRemover);


renderQuiz();

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

