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
    backgroundMusic.play();
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

const restartButton = document.createElement('div');
restartButton.textContent = '↻';

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

const hardGamePlayArea = document.getElementById("hard-game-play-area")



hardButton.addEventListener("click",()=>{
    difficultyScreen.style.display = "none";
    hardGamePlayArea.style.display = "block";
    hardGamePlayArea.style.backgroundColor= "black";
    hardGameScreen.style.display='block';
    buttonSound.play();
})



const spikeBall = document.getElementById('spikeball');
const basketBall = document.getElementById('basketball');
const beachBall = document.getElementById('beachball');
const displayOfBalls = document.getElementById('ball-display');
const dropDown = document.querySelector(".dropdown")
let array = [];
spikeBall.addEventListener('click', () => {
    const spikeBallImage = document.createElement("img");
    spikeBallImage.src = "https://mario.wiki.gallery/images/thumb/2/26/NSMBW_Spike_Ball_Artwork.png/1200px-NSMBW_Spike_Ball_Artwork.png";
    displayOfBalls.appendChild(spikeBallImage);
    buttonSound.play();

    spikeBallImage.addEventListener("click", () => {
        hardGameScreen.style.display = 'block';
        buttonSound.play();
        dropDown.style.display = "none";
        hardGamePlayArea.style.backgroundColor = "white";
        spikeBallImage.style.display = "none";
        for (let i = 0; i < 10; i++) {
            const spikeBallImageForGame = document.createElement('img');
            spikeBallImageForGame.src = "https://mario.wiki.gallery/images/thumb/2/26/NSMBW_Spike_Ball_Artwork.png/1200px-NSMBW_Spike_Ball_Artwork.png";
            hardGamePlayArea.appendChild(spikeBallImageForGame);
            spikeBallImageForGame.classList.add('hard-ball');
            spikeBallImageForGame.classList.add('horizontal');
            spikeBallImageForGame.classList.add('rotating');
            array.push(spikeBallImageForGame);
        }

        // Add class names based on index
        array[0].classList.add("ball-one");
        array[1].classList.add("ball-two");
        array[2].classList.add("ball-three");
        array[3].classList.add("ball-four");
        array[4].classList.add("ball-five");
        array[5].classList.add("ball-six");
        array[6].classList.add("ball-seven");
        array[7].classList.add("ball-eight");
        array[8].classList.add("ball-nine");
        array[9 ].classList.add("ball-ten");

        console.log(array);
    });
}, { once: true });

basketBall.addEventListener('click', () => {
    buttonSound.play();
    const basketBallImage = document.createElement("img");
    basketBallImage.src = "https://clipart-library.com/image_gallery2/Basketball-PNG-HD.png";
    displayOfBalls.appendChild(basketBallImage);
}, { once: true });

beachBall.addEventListener('click', () => {
    buttonSound.play();
    const beachBallImage = document.createElement("img");
    beachBallImage.src = "https://clipart-library.com/image_gallery2/Beach-Ball-PNG-Image.png";
    displayOfBalls.appendChild(beachBallImage);
}, { once: true });

