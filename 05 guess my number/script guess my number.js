'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click',function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);


if(score > 1) {
    if(!guess) {
        document.querySelector('.message').textContent = '😒 no numberrr';
    } else if(guess === secretNumber) {
        document.querySelector('.message').textContent = '🙌  you are truee';
        document.querySelector('body').style.backgroundColor = '#B54119';
        document.querySelector('.number').style.width = '38rem';
        document.querySelector('.number').textContent= secretNumber;
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = '📈  you are high';
        score = score - 1;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = ' 📉 you are low';
        score = score - 1;
        document.querySelector('.score').textContent = score; }
    
} else if(score =1) {
    score = score -1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = ' 😰 you lose the game ';
}
});


document.querySelector('.again').addEventListener('click',function(){
    secretNumber = Math.trunc(Math.random()*20)+1;
    score = 20;
    console.log(secretNumber);

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';document.querySelector('.number').textContent= '?';
    document.querySelector('.guess').value= '';
})

    

