'use strict';

const remove = document.querySelector('.quizcontainer');
const results = document.querySelector('.uqc');
const quiz = document.getElementById('quiz');
let btn = document.getElementById('submit');
const labela = document.getElementById('atext');
const labelb = document.getElementById('btext');
const labelc = document.getElementById('ctext');
const labeld = document.getElementById('dtext');
let flag = document.querySelector('.front-face');
let backCard = document.querySelector('.back-face');

const quizquestion = document.getElementById('quizquestion');
let questionsArray = [];
let score = 0;
let currentQuestion = 0;
let correctAnswers = [];

const keyName = 'currentUser';
const tally = 'puntos';

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
  'bolivia', //img src
  'Ukraine',
  'Tonga',
  'Bolivia',
  'Denmark',
  'c' //correct answer
);
new QuestionConstructor(
  'What country does this flag represent?',
  'guinea', //img src
  'Norway',
  'Guinea',
  'Sweden',
  'Phillipines',
  'b' //correct answer
);

new QuestionConstructor(
  'What country does this flag represent?',
  'jordan', //img src
  'Iraq',
  'Afghanistan',
  'Slovenia',
  'Jordan',
  'd' //correct answer
);
new QuestionConstructor(
  'What country does this flag represent?',
  'kyrgyzstan', //img src
  'Russia',
  'Kyrgyzstan',
  'Ireland',
  'Sudan',
  'b' //correct answer
);
new QuestionConstructor(
  'What country does this flag represent?',
  'laos', //img src
  'Laos',
  'Cameroon',
  'China',
  'Japan',
  'a' //correct answer
);
new QuestionConstructor(
  'What country does this flag represent?',
  'morocco', //img src
  'Chile',
  'Australia',
  'Morocco',
  'Germany',
  'c' //correct answer
);
new QuestionConstructor(
  'What country does this flag represent?',
  'mozambique', //img src
  'Brazil',
  'Mozambique',
  'Austria',
  'Argentina',
  'b' //correct answer
);
new QuestionConstructor(
  'What country does this flag represent?',
  'north-macedonia', //img src
  'Algeria',
  'Czech Republic',
  'Cuba',
  'North Macedonia',
  'd' //correct answer
);
new QuestionConstructor(
  'What country does this flag represent?',
  'suriname', //img src
  'Greece',
  'Suriname',
  'Albania',
  'Bulgaria',
  'b' //correct answer
);

new QuestionConstructor(
  'What country does this flag represent?',
  'ukraine', //img src
  'Ukraine',
  'Bahrain',
  'Poland',
  'Croatia',
  'a' //correct answer
);

function renderQuiz() {
  flag.src = questionsArray[currentQuestion].src;
  backCard.src = questionsArray[currentQuestion].back;
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
    h1.textContent = 'Results';
    div.appendChild(h1);
    let divresults = document.createElement('div');
    divresults.classList.add('resultslist');
    div.appendChild(divresults);
    let ol = document.createElement('ol');
    divresults.appendChild(ol);
    let ol2 = document.createElement('ol');
    ol2.classList.add('correctli');
    divresults.appendChild(ol2);
    for (let j = 0; j < correctAnswers.length; j++) {
      let li2 = document.createElement('li');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      p3.classList.add('check');
      p2.textContent = questionsArray[j].country;
      let img = document.createElement('img');
      img.classList.add('liimg');
      img.src = questionsArray[j].src;
      ol2.appendChild(li2);
      li2.appendChild(p2);
      li2.appendChild(img);
      li2.appendChild(p3);
      if (correctAnswers[j] === 1) {
        p3.innerHTML = '<i class="fas fa-check"></i>';
      } else {
        p3.innerHTML = '<i class="fas fa-times"></i>';
      }
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
    });
    // Takes user to leaderboard.html
    const leaderboard = document.querySelector('.leaderboard');
    leaderboard.addEventListener('click', () => {
      location.href = 'leaderboard.html';
    });
    // storeLeaderscore();
    // sessionStorage.clear();
  }

  console.log(questionsArray[currentQuestion].correct);
  console.log(score);
  console.log(sessionStorage.getItem(keyName));
  console.log(correctAnswers);
  currentQuestion++;
  renderQuiz();
});
