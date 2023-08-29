const startScreen = document.getElementById('start-screen');
const introBall = document.querySelector(".starting-ball-child");
const difficultyScreen = document.getElementById('difficulty-screen');
const players = document.getElementById('choose-players');
const playerOne = document.getElementById('player-one');
const playerTwo = document.getElementById('player-two');
const scoreDisplay = document.getElementById('score');
let score = 0;

//!SECTION intro

//!SECTION timer
let countdownTimeout;
const countdownElement = document.getElementById('countdown');
let timeLeft = 10;

const updateCountdown = () => {
    countdownElement.textContent = `Time left:${timeLeft}`;
    timeLeft--;
    
    if (timeLeft >= 0) {
        countdownTimeout = setTimeout(updateCountdown, 1000);
    } else {
            easyLevelPassed.style.display = "flex";
            easyLevelPassed.textContent = `Try Again! You only got `+ `${score-1}`+ ` points!`;
            easyGamePlayArea.style.display = "none";
            nextButton.style.display = "flex";
            timesup = false;
        };
    };

introBall.addEventListener('click', ()=>{
    startScreen.style.display = "none";
    players.style.display = "flex";
    playerOne.style.display = "block";
    playerTwo.style.display = "block";
})

playerOne.addEventListener('click',()=>{
    difficultyScreen.style.display = "flex";
    players.style.display = "none";
})

playerTwo.addEventListener('click',()=>{
    difficultyScreen.style.display = "flex";
    players.style.display = "none";
})

//!SECTION buttons
const easyButton = document.getElementById("easy-button");
const mediumButton = document.getElementById("medium-button");
const hardButton = document.getElementById("hard-button");

//!SECTION screen
const easyGameScreen = document.getElementById('easy-game-screen');
const mediumGameScreen = document.getElementById('medium-game-screen');
const hardGameScreen = document.getElementById('hard-game-screen');


//!SECTION easy level
const easyGamePlayArea = document.getElementById('easy-game-play-area');
easyButton.addEventListener("click",()=>{
    difficultyScreen.style.display = "none";
    easyGameScreen.style.display='block';
    scoreDisplay.style.display= "flex";
    countdownElement.style.display = "flex"
    easyLevelFunction();
})
const horizontal = document.querySelector('.horizontal');
const easyLevelPassed = document.getElementById('easy-level-passed');
const nextButton =document.getElementById("next-button");
//!SECTION display children function
const easyLevelFunction = ()=>{
    updateCountdown();
    scoreDisplay.textContent = `Score: ${score}`;
    let childrenCount = 0;
    let childrenPresent = false;
    let children = horizontal.children;
    if(children.length !== 0){
        for(i = 0; i<children.length; i++){
            childrenPresent = true;
            let child = children[i];
            child.addEventListener('click',(event)=>{
                scoreDisplay.textContent = `Score: ${score++}`
                console.log(score);
                event.target.style.display = "none"
                childrenCount++;
                if(childrenCount === children.length){
                    childrenPresent = false;
                    easyLevelPassed.style.display = "flex";
                    easyLevelPassed.textContent = `Good Job! You passed the easy level with `+ `${score}`+ ` points!`;
                    clearTimeout(countdownTimeout);
                    easyGamePlayArea.style.display = "none";
                    nextButton.style.display = "flex";
                }
                
            }  
            
            )}
        }}
        
        nextButton.addEventListener("click", ()=>{
            difficultyScreen.style.display = "block";
            easyLevelPassed.style.display = "none";
            nextButton.style.display = "none";
    scoreDisplay.textContent = "0";
    scoreDisplay.style.display = "none";
    easyButton.style.pointerEvents = "none";
    easyButton.style.textDecoration = "line-through";
    easyButton.style.backgroundColor = "white"; 
    easyButton.style.color = "black"; 
    countdownElement.style.display = "none";
})


//!SECTION Medium 
const mediumLevelPassed = document.getElementById('medium-level-passed');
const mediumGamePlayArea = document.getElementById('medium-game-play-area');
const mediumHorizontal = document.querySelector('.medium-horizontal');
const mediumNextButton = document.getElementById('medium-next-button')
mediumButton.addEventListener("click",()=>{
    difficultyScreen.style.display = "none";
    mediumGameScreen.style.display='block';
    scoreDisplay.style.display= "flex";
    mediumLevelFunction();
})



const mediumLevelFunction = ()=>{
    updateCountdown();
    // setTimeout(function(){
    //     mediumLevelPassed.textContent = `Try Again! You only got `+ `${score}`+ ` points!`
    //     mediumLevelPassed.style.display = "flex"; 
    //     mediumGamePlayArea.style.display = "none";
    //     mediumNextButton.style.display = "flex";
    // }, 5000);
    scoreDisplay.textContent = `Score: ${score}`;
    let childrenCount = 0;
    let childrenPresent = false;
    let children = mediumHorizontal.children;
    if(children.length !== 0){
        for(i = 0; i<children.length; i++){
            childrenPresent = true;
            let child = children[i];
            child.addEventListener('click',(event)=>{
                scoreDisplay.textContent = score++
               console.log(score);
                event.target.style.display = "none"
                childrenCount++;
                if(childrenCount === children.length){
                    childrenPresent = false;
                    mediumLevelPassed.textContent = `Good Job! You passed the easy level with `+ `${score}`+ ` points!`
                    mediumLevelPassed.style.display = "flex";
                    mediumGamePlayArea.style.display = "none";
                    mediumNextButton.style.display = "flex";
                }
            })
        }  
      
    }
}
mediumNextButton.addEventListener("click", ()=>{
    difficultyScreen.style.display = "block";
    mediumLevelPassed.style.display = "none";
    mediumNextButton.style.display = "none";
})





hardButton.addEventListener("click",()=>{
    difficultyScreen.style.display = "none";
    hardGameScreen.style.display='block';
})


