//AUDIO
const backgroundMusic = document.getElementById('background-music')
const buttonSound = document.getElementById('pop-sound');
const timeIsUp = document.getElementById('time-is-up');
backgroundMusic.volume = 0.2;


// INTRO
const startScreen = document.getElementById('start-screen');
const introBall = document.querySelector(".starting-ball-child");
const difficultyScreen = document.getElementById('difficulty-screen');
const players = document.getElementById('choose-players');
const playerOne = document.getElementById('player-one');
const playerTwo = document.getElementById('player-two');
const scoreDisplay = document.getElementById('score');


//!SECTION screen
const easyGameScreen = document.getElementById('easy-game-screen');
const mediumGameScreen = document.getElementById('medium-game-screen');
const hardGameScreen = document.getElementById('hard-game-screen');

introBall.addEventListener('click', ()=>{
    startScreen.style.display = "none";
    players.style.display = "flex";
    playerOne.style.display = "block";
    playerTwo.style.display = "block";
    buttonSound.play();
    backgroundMusic.play();
})


// PLAYERS
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

// MENU
let countdownTimeout;
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


const restartButton = document.createElement('div');
restartButton.textContent = '↻';

// LEVEL 1
const easyGamePlayArea = document.getElementById('easy-game-play-area');

const fieldImage = document.createElement('img');
fieldImage.src = "https://thumbs.dreamstime.com/b/top-view-stripe-grass-soccer-field-green-lawn-pattern-background-top-view-stripe-grass-soccer-field-175065164.jpg";
fieldImage.draggable = false;
fieldImage.style.borderColor = "white"
fieldImage.style.borderStyle = "solid"

const loadEasyLevel = () =>{
    difficultyScreen.style.display = "none";
    easyGameScreen.style.display='block';
    scoreDisplay.style.display= "flex";
    easyLevelFunction();
    buttonSound.play();
    easyGamePlayArea.appendChild(fieldImage);
}
easyButton.addEventListener("click",loadEasyLevel)

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
                fieldImage.src = "";
            })
        }}
        
        scoreDisplay.textContent = `Score: ${score}`;
        const easyLevelPassed = document.getElementById('easy-level-passed');

// LEVEL 2
const loadMediumLevel = () =>{
    difficultyScreen.style.display = "none";
    mediumGameScreen.style.display='block';
    scoreDisplay.style.display= "flex";
    countdownElement.style.display = "flex";
    mediumLevelFunction();
        buttonSound.play(); 
}

mediumButton.addEventListener("click", loadMediumLevel);
const horizontal = document.querySelector('.horizontal');
const nextButton =document.getElementById("next-button");

const mediumLevelPassed = document.getElementById('medium-level-passed');
        const mediumGamePlayArea = document.getElementById('medium-game-play-area');
        const mediumHorizontal = document.querySelector('.medium-horizontal');
        const mediumNextButton = document.getElementById('medium-next-button');
        const desktopImage = document.createElement('img');
desktopImage.src = "http://1.bp.blogspot.com/-K6M1Yh--jQQ/Tn32IIuZU8I/AAAAAAAADLE/QeMrOwMf_5E/s1600/bliss_xp_default_wallpaper.jpg";
desktopImage.draggable = false;
       mediumGamePlayArea.appendChild(desktopImage)
const mediumLevelFunction = ()=>{
    buttonSound.play();
    scoreDisplay.style.margin = "0";
    updateCountdown();
    scoreDisplay.textContent = `Score: 0`;
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
// HARD LEVEL
const hardGamePlayArea = document.getElementById("hard-game-play-area")



hardButton.addEventListener("click",()=>{
    difficultyScreen.style.display = "none";
    hardGamePlayArea.style.display = "block";
    hardGamePlayArea.style.backgroundColor= "black";
    hardGameScreen.style.display='block';
    buttonSound.play();
    
})


// BALLS
const spikeBall = document.getElementById('spikeball');
const basketBall = document.getElementById('basketball');
const beachBall = document.getElementById('beachball');
const displayOfBalls = document.getElementById('ball-display');
const dropDown = document.querySelector(".dropdown");
const choiceOfBallsArea = document.getElementById('game-area-for-choice-of-balls');
const hardLevelPassed = document.getElementById('hard-level-passed');
const hardNextButton = document.getElementById('hard-next-button');

let array = [];
spikeBall.addEventListener('click', () => {
    scoreDisplay.style.margin = "auto";
    score = 0;
    scoreDisplay.textContent = `Score: 0`
    const spikeBallImage = document.createElement("img");
    spikeBallImage.src = "https://mario.wiki.gallery/images/thumb/2/26/NSMBW_Spike_Ball_Artwork.png/1200px-NSMBW_Spike_Ball_Artwork.png";
    displayOfBalls.appendChild(spikeBallImage);
    buttonSound.play();
    spikeBallImage.addEventListener("click", () => {
        scoreDisplay.style.display = "flex";
        choiceOfBallsArea.classList.add('horizontal');
        hardGameScreen.style.display = 'block';
        buttonSound.play();
        dropDown.style.display = "none";
        hardGamePlayArea.style.backgroundColor = "white";
        spikeBallImage.style.display = "none";
        for (let i = 0; i < 10; i++) {
            // spikeBallImageForGame.classList('padding-image');
            const spikeBallImageForGame = document.createElement('img');
            spikeBallImageForGame.draggable = false
            spikeBallImageForGame.src = "https://mario.wiki.gallery/images/thumb/2/26/NSMBW_Spike_Ball_Artwork.png/1200px-NSMBW_Spike_Ball_Artwork.png";
            choiceOfBallsArea.appendChild(spikeBallImageForGame);
            displayOfBalls.style.display = "none"
            spikeBallImageForGame.classList.add('hard-ball');
            spikeBallImageForGame.classList.add('rotating');
            array.push(spikeBallImageForGame);
            
            spikeBallImageForGame.addEventListener('click', () => {
                score++
                scoreDisplay.textContent = `Score: ${score}`;
                console.log(score);
                spikeBallImageForGame.style.display = "none";
                buttonSound.play();
                if (i === 0) {
                    scoreDisplay.textContent = `Score: ${score}`
                    hardLevelPassed.style.display = "flex";
                    hardButton.style.display = "initial";
                    hardLevelPassed.textContent = `Good Job! You passed the hard level with ` + `${score}` + ` points!`;
                    hardLevelPassed.style.display = "flex";
                    hardGamePlayArea.style.display = "none";
                    hardNextButton.style.display = "block";
                }
            });
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
        array[9].classList.add("ball-ten");
    });
    hardNextButton.addEventListener("click", ()=>{
        difficultyScreen.style.display = "block";
        hardLevelPassed.style.display = "none";
        mediumNextButton.style.display = "none";
        scoreDisplay.style.display = "none";
        hardButton.style.pointerEvents = "none";
        // hardButton.style.textDecoration = "line-through";
        // hardButton.style.backgroundColor = "white"; 
        // hardButton.style.color = "black"; 
        countdownElement.style.display = "none";
        buttonSound.play();
        hardNextButton.style.display = "none";

    })
});

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


