'use strict';

const cardContainer = document.querySelector('.card-container');
const card = document.querySelector('.card');


let flipCardBack = function () {
  card.classList.add('flip');
};

let flipCardFront = function () {
  card.classList.remove('flip');
};


cardContainer.addEventListener('mouseenter', flipCardBack);
cardContainer.addEventListener('mouseleave', flipCardFront);
