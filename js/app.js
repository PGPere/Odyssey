'use strict';

const userForm = document.querySelector('form');
let userName = '';
const keyName = 'currentUser';
const tally = 'puntos';

function handleSubmit(event) {
  event.preventDefault();
  let userNameInput = event.target.userName.value;
  userName = userNameInput;
  localStorage.setItem(keyName, userName);
  console.log(userName);
  window.open('quiz.html#quizheader', '_self'); 
  //quiz.html#quiz
}

if (userForm) {
  userForm.addEventListener('submit', handleSubmit);
}
const remove = document.querySelector('.quizcontainer');
const results = document.querySelector('.uqc'); 
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
let correctAnswers = [];

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
// new QuestionConstructor(
//   'What country does this flag represent?',
//   'tuvalu', //img src
//   'Ukraine',
//   'Question3',
//   'Slovenia',
//   'Tuvalu',
//   'd' //correct answer
// );
// new QuestionConstructor(
//   'What country does this flag represent?',
//   'cameroon', //img src
//   'Ukraine',
//   'Cameroon',
//   'Slovenia',
//   'Tuvalu',
//   'b' //correct answer
// );
// new QuestionConstructor(
//   'What country does this flag represent?',
//   'ukraine', //img src
//   'Ukraine',
//   'Cameroon',
//   'Slovenia',
//   'Tuvalu',
//   'a' //correct answer
// );
// new QuestionConstructor(
//   'What country does this flag represent?',
//   'slovenia', //img src
//   'Ukraine',
//   'Tonga',
//   'Slovenia',
//   'Phillipines',
//   'c' //correct answer
// );
// new QuestionConstructor(
//   'What country does this flag represent?',
//   'tonga', //img src
//   'Ukraine',
//   'Tonga',
//   'Slovenia',
//   'Phillipines',
//   'b' //correct answer
// );
// new QuestionConstructor(
//   'What country does this flag represent?',
//   'tuvalu', //img src
//   'Ukraine',
//   'Question3',
//   'Slovenia',
//   'Tuvalu',
//   'd' //correct answer
// );
// new QuestionConstructor(
//   'What country does this flag represent?',
//   'cameroon', //img src
//   'Ukraine',
//   'Cameroon',
//   'Slovenia',
//   'Tuvalu',
//   'b' //correct answer
// );
// new QuestionConstructor(
//   'What country does this flag represent?',
//   'ukraine', //img src
//   'Ukraine',
//   'Cameroon',
//   'Slovenia',
//   'Tuvalu',
//   'a' //correct answer
// );

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
  //TODO: Add timer/progress bar if time permits
  
  selectedElement.checked = false;
  if (selectedElement.value === questionsArray[currentQuestion].correct) {
    score++;
    // Allows us to check the correct/incorrect answers
    correctAnswers.push(1);
  } else {
    correctAnswers.push(0);
  }
  
  localStorage.setItem(tally, score);

  if (currentQuestion === questionsArray.length - 1) {
    //Removes the quiz and then appends the results page to the DOM
    quiz.innerHTML = '';
    // Removes the quizcontainer to allow for quizresults to be appended to .uqc for easier styling
    remove.remove();
    let div = document.createElement('div');
    div.classList.add('quizresults');
    results.appendChild(div);
    let h1 = document.createElement('h1');
    h1.classList.add('h1results');
    h1.textContent = 'Quiz Results';
    div.appendChild(h1);
    let divresults = document.createElement('div');
    divresults.classList.add('resultslist');
    div.appendChild(divresults);
    let ol = document.createElement('ol');
    divresults.appendChild(ol);
    let ol2 = document.createElement('ol');
    ol2.classList.add('correctli');
    divresults.appendChild(ol2);
    // TODO: Need to show user what answers they answered correctly/incorrectly
    for(let i = 0; i < correctAnswers.length; i++) {
      let li = document.createElement('li');
      li.classList.add('resultsli');
      if(correctAnswers[i] === 1) {
        li.textContent = `Correct`;
        ol.appendChild(li);
      } else {
        li.textContent = `Incorrect`;
        ol.appendChild(li);
      }
    }
    for(let j = 0; j < questionsArray.length; j++) {
      let li2 = document.createElement('li');
      let p2 = document.createElement('p');
      p2.textContent = questionsArray[j].country;
      let img = document.createElement('img');
      img.classList.add('liimg');
      img.src = questionsArray[j].src;
      ol2.appendChild(li2);
      li2.appendChild(p2);
      li2.appendChild(img);

    }
    // Displays the amount of questions the user answered correctly
    let p = document.createElement('p');
    p.classList.add('resultsmessage');
    p.textContent = `You answered ${score} out of ${questionsArray.length} questions correctly.`;
    div.appendChild(p);
    // Creates/appends buttons to .quizresults
    let buttondiv = document.createElement('div');
    buttondiv.classList.add('buttons');
    div.appendChild(buttondiv);
    let button = document.createElement('button');
    button.classList.add('retake');
    button.textContent = 'Retake Quiz';
    buttondiv.appendChild(button);
    let button2 = document.createElement('button');
    button2.classList.add('leaderboard');
    button2.textContent = 'Leaderboard';
    buttondiv.appendChild(button2);
    // Allows user to retake the quiz
    const refresh = document.querySelector('.retake');
    refresh.addEventListener('click', () => {
      location.reload();
    })
    // Takes user to leaderboard.html
    const leaderboard = document.querySelector('.leaderboard');
    leaderboard.addEventListener('click', ()=> {
      location.href = "leaderboard.html"
    })
    // storeLeaderscore();
    // sessionStorage.clear();
  }
 
  console.log(questionsArray[currentQuestion].correct);
  console.log(score);
  console.log (sessionStorage.getItem(keyName));
  console.log(correctAnswers);
  currentQuestion++;
  renderQuiz();
  
});




