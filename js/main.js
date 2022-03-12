'use strict';

const cardArray = [
    {
        name:'pizza',
        img: 'https://cdn.pixabay.com/photo/2012/04/01/16/51/pizza-23477_960_720.png',

    },
    {
        name: 'fries',
        img: 'https://cdn.pixabay.com/photo/2013/07/13/01/24/french-fries-155679_960_720.png',
    },
    {
        name: 'milkshake',
        img: 'https://cdn.pixabay.com/photo/2012/04/14/15/57/drinks-34377_960_720.png',
    },
    {
        name: 'ice-cream',
        img: 'https://cdn.pixabay.com/photo/2020/03/19/07/19/ice-cream-4946596_960_720.png',
    },
    {
        name: 'hotdog',
        img: 'https://cdn.pixabay.com/photo/2021/07/11/03/46/hot-dog-sandwich-6402792_960_720.png',
    },
    {
        name: 'cheeseburger',
        img: 'https://cdn.pixabay.com/photo/2012/04/13/01/51/hamburger-31775_960_720.png',
    },
    {
        name:'pizza',
        img: 'https://cdn.pixabay.com/photo/2012/04/01/16/51/pizza-23477_960_720.png',

    },
    {
        name: 'fries',
        img: 'https://cdn.pixabay.com/photo/2013/07/13/01/24/french-fries-155679_960_720.png',
    },
    {
        name: 'milkshake',
        img: 'https://cdn.pixabay.com/photo/2012/04/14/15/57/drinks-34377_960_720.png',
    },
    {
        name: 'ice-cream',
        img: 'https://cdn.pixabay.com/photo/2020/03/19/07/19/ice-cream-4946596_960_720.png',
    },
    {
        name: 'hotdog',
        img: 'https://cdn.pixabay.com/photo/2021/07/11/03/46/hot-dog-sandwich-6402792_960_720.png',
    },
    {
        name: 'cheeseburger',
        img: 'https://cdn.pixabay.com/photo/2012/04/13/01/51/hamburger-31775_960_720.png',
    },
]

cardArray.sort(() => 0.5 - Math.random());
const gridDisplay = document.querySelector('#grid')

function createBoard(){
    for(let i = 0; i < 10; i++){
      const card = document.createElement('img');
      card.setAttribute('src', 'https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_960_720.png');
      card.setAttribute('data-id', i)
      gridDisplay.appendChild(card)
    }
}
createBoard();