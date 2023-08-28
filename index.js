const startScreen = document.getElementById('start-screen');
const introBall = document.querySelector(".starting-ball-child");
const difficultyScreen = document.getElementById('difficulty-screen');

introBall.addEventListener('click', ()=>{
    startScreen.style.display = "none";
    difficultyScreen.removeAttribute('display');
})


const easyButton = document.getElementById("easy-button");
const mediumButton = document.getElementById("medium-button");
const hardButton = document.getElementById("hard-button");

const easyGameScreen = document.getElementById('easy-game-screen');

const mediumGameScreen = document.getElementById('medium-game-screen');
const hardGameScreen = document.getElementById('hard-game-screen');
const easyGamePlayArea = document.getElementById('easy-game-screen-play-area');

easyButton.addEventListener("click",()=>{
    difficultyScreen.style.display = "none";
    easyGameScreen.style.display='block';
})

mediumButton.addEventListener("click",()=>{
    difficultyScreen.style.display = "none";
    mediumGameScreen.style.display='block';
})

hardButton.addEventListener("click",()=>{
    difficultyScreen.style.display = "none";
    hardGameScreen.style.display='block';
})