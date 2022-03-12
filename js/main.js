'use strict';

const cardArray = [
    {
        name:'pizza',
        img: 'images/pizza.png',

    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name:'pizza',
        img: 'images/pizza.png',

    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
]

cardArray.sort(() => 0.5 - Math.random());

console.log(cardArray);

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result-Score')

let cardChosen = [];
let cardsChosenIds = [];
const cardWon = [];

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
      const card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      gridDisplay.appendChild(card)
    }
}
createBoard();


//checking for the match photos
function checkMatch(){
   const cards =  document.querySelectorAll('img');

   const optionOneId = cardsChosenIds[0];
   const optionTwoId = cardsChosenIds[1];
    console.log('check for match!')
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('You have clicked the same image!')
    }
    if (cardChosen[0] == cardChosen [1]) {
        alert('you found a match!');
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardWon.push(cardChosen);
    }
    else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('Sorry try again!')
    }
    resultDisplay.textContent = cardWon.length;

    cardChosen = []
    cardsChosenIds  = []

    if(cardWon.length === (cardArray.length/2)){
        resultDisplay.textContent = 'Congratulations you found them all!'
    }
}


//function to flip the cards
function flipCard (){

    let cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId);
    console.log(cardChosen);
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img);

    if(cardChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}