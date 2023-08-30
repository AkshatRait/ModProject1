const backgroundMusic = document.getElementById('background-music')
const buttonSound = document.getElementById('pop-sound');
const timeIsUp = document.getElementById('time-is-up');
backgroundMusic.volume = 0.2;

const startScreen = document.getElementById('start-screen');
const introBall = document.querySelector(".starting-ball-child");
const difficultyScreen = document.getElementById('difficulty-screen');
const players = document.getElementById('choose-players');
const playerOne = document.getElementById('player-one');
const playerTwo = document.getElementById('player-two');
const scoreDisplay = document.getElementById('score');

//!SECTION intro

//!SECTION timer
let countdownTimeout;

introBall.addEventListener('click', ()=>{
    startScreen.style.display = "none";
    players.style.display = "flex";
    playerOne.style.display = "block";
    playerTwo.style.display = "block";
    buttonSound.play();
})

playerOne.addEventListener('click',()=>{
    difficultyScreen.style.display = "flex";
    players.style.display = "none";
    buttonSound.play();
})

playerTwo.addEventListener('click',()=>{
    difficultyScreen.style.display = "flex";
    players.style.display = "none";
    buttonSound.play();

})


//!SECTION buttons
const easyButton = document.getElementById("easy-button");
const mediumButton = document.getElementById("medium-button");
const hardButton = document.getElementById("hard-button");
const home = document.getElementById('home');
home.addEventListener('click',()=>{
    startScreen.style.display = "block";
    buttonSound.play();
    difficultyScreen.style.display = "none";
})

//!SECTION screen
const easyGameScreen = document.getElementById('easy-game-screen');
const mediumGameScreen = document.getElementById('medium-game-screen');
const hardGameScreen = document.getElementById('hard-game-screen');

const restartButton = document.createElement('div');restartButton.textContent = '↻';

//!SECTION easy level
const easyGamePlayArea = document.getElementById('easy-game-play-area');
const loadEasyLevel = () =>{
    difficultyScreen.style.display = "none";
    easyGameScreen.style.display='block';
    scoreDisplay.style.display= "flex";
    easyLevelFunction();
    buttonSound.play();
}
easyButton.addEventListener("click",loadEasyLevel)


const loadMediumLevel = () =>{
     difficultyScreen.style.display = "none";
        mediumGameScreen.style.display='block';
        scoreDisplay.style.display= "flex";
        countdownElement.style.display = "flex";
        mediumLevelFunction();
        buttonSound.play(); 
}

mediumButton.addEventListener("click", loadMediumLevel)
const horizontal = document.querySelector('.horizontal');
const easyLevelPassed = document.getElementById('easy-level-passed');
const nextButton =document.getElementById("next-button");
//!SECTION display children function
let score = 0;
const easyLevelFunction = ()=>{
    scoreDisplay.textContent = `Score: 0`;
    scoreDisplay.style.margin = "auto";
    score = 0;
    let childrenCount = 0;
    let childrenPresent = false;
    let children = horizontal.children;
    if(children.length !== 0){
        for(i = 0; i<children.length; i++){
            childrenPresent = true;
            let child = children[i];
            child.addEventListener('click',(event)=>{
                buttonSound.play();
                score++
                scoreDisplay.textContent = `Score: ${score}`
                event.target.style.display = "none"
                childrenCount++;
                if(childrenCount === children.length){
                    childrenPresent = false;
                    easyLevelPassed.style.display = "flex";
                    easyLevelPassed.textContent = `Good Job! You passed the easy level with `+ `${score}`+ ` points!`;
                    easyGamePlayArea.style.display = "none";
                    nextButton.style.display = "flex";
                }
                
            }  
            
            )}
            nextButton.addEventListener("click", ()=>{
                difficultyScreen.style.display = "block";
                easyLevelPassed.style.display = "none";
                nextButton.style.display = "none";
                scoreDisplay.style.display = "none";
                easyButton.style.pointerEvents = "none";
                easyButton.style.textDecoration = "line-through";
                easyButton.style.backgroundColor = "white"; 
                easyButton.style.color = "black"; 
                countdownElement.style.display = "none";
                buttonSound.play();
            })
        }}
        
        scoreDisplay.textContent = `Score: ${score}`;
        
        //!SECTION Medium 
        
        const mediumLevelPassed = document.getElementById('medium-level-passed');
        const mediumGamePlayArea = document.getElementById('medium-game-play-area');
        const mediumHorizontal = document.querySelector('.medium-horizontal');
        const mediumNextButton = document.getElementById('medium-next-button');
        const countdownSecondElement = document.getElementById('countdownSecond');
        
        const countdownElement = document.getElementById('countdown');

        let timeLeft = 10;
const updateCountdown = () => {
    countdownElement.textContent = `Time left:${timeLeft}`;
    timeLeft--;
    
    if (timeLeft >= 0) {
        countdownTimeout = setTimeout(updateCountdown, 1000);
    }
    else {
        timeIsUp.play()
        mediumLevelPassed.style.display = "flex";
        mediumLevelPassed.textContent = `Try Again! You only got `+ `${score}`+ ` points!`;
        mediumGamePlayArea.style.display = "none";
        timesup = false;
        mediumNextButton.style.display = "flex";
    };
};
const mediumLevelFunction = ()=>{
    buttonSound.play();
    scoreDisplay.style.margin = "0";
    updateCountdown();
    scoreDisplay.textContent = `Score: 0`
    score = 0;
    let childrenCount = 0;
    let childrenPresent = false;
    let children = mediumHorizontal.children;
    if(children.length !== 0){
        for(i = 0; i<children.length; i++){
            childrenPresent = true;
            let child = children[i];
            child.addEventListener('click',(event)=>{
                scoreDisplay.textContent = `Score: ${score}`
                buttonSound.play();
                score++
                event.target.style.display = "none"
                childrenCount++;
                if(childrenCount === children.length){
                    childrenPresent = false;
                    mediumLevelPassed.textContent = `Good Job! You passed the easy level with `+ `${score-1}`+ ` points!`;
                    clearTimeout(countdownTimeout);
                    mediumLevelPassed.style.display = "flex";
                    mediumGamePlayArea.style.display = "none";
                    mediumNextButton.style.display = "flex";
                }
            })
        }  
        
        scoreDisplay.textContent = `Score: ${score}`;
    }
    mediumNextButton.addEventListener("click", ()=>{
        difficultyScreen.style.display = "block";
        mediumLevelPassed.style.display = "none";
        mediumNextButton.style.display = "none";
        scoreDisplay.style.display = "none";
        mediumButton.style.pointerEvents = "none";
        mediumButton.style.textDecoration = "line-through";
        mediumButton.style.backgroundColor = "white"; 
        mediumButton.style.color = "black"; 
        countdownElement.style.display = "none";
        buttonSound.play();
    })
}





hardButton.addEventListener("click",()=>{
    difficultyScreen.style.display = "none";
    hardGameScreen.style.display='block';
})


