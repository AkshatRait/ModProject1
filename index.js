const startScreen = document.getElementById('start-screen');
const introBall = document.querySelector(".starting-ball-child");
const difficultyScreen = document.getElementById('difficulty-screen');

//!SECTION intro

introBall.addEventListener('click', ()=>{
    startScreen.style.display = "none";
    difficultyScreen.removeAttribute('display');
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
})

const horizontal = document.getElementById('horizontal');
const easyLevelPassed = document.getElementById('easy-level-passed');
const nextButton =document.getElementById("next-button");
let childrenPresent = false;

const displayChildren = ()=>{
    let childrenCount = 0;
    const children = horizontal.children;

    if(children.length !== 0){
        for(i = 0; i<children.length; i++){
            childrenPresent = true;
            let child = children[i];
            child.addEventListener('click',(event)=>{
                event.target.style.display = "none"
                childrenCount++;
                if(childrenCount === children.length){
                    childrenPresent = false;
                    easyLevelPassed.style.display = "flex";
                    easyGamePlayArea.style.display = "none";
                    nextButton.style.display = "flex";
                }
            })
        }  
      
    }
}
displayChildren()

//     return new Promise((resolve)=>{

    
//     let childrenPresent = false;
//     const children = horizontal.children;


//     if (children.length !== 0) {
//         let countOfChildren =0;//gives you another variable to keep track

//         for (let i = 0; i < children.length; i++) {
//             let child = children[i];
//             child.addEventListener("click", (event) => {
//                 event.target.style.display = "none";
//                  childrenPresent = true;
//                  countOfChildren++;//adding one each to the var

//                  if(countOfChildren === children.length){
//                     resolve(childrenPresent);
//                  }
//             });
//         }
//     } else {
//          childrenPresent = false;
//          resolve(childrenPresent);
//     }
// })
// }
// loopThroughChildren().then((childrenPresent)=>{
//     if(!childrenPresent){
//         easyLevelPassed.style.display = "flex";
//         easyGameScreen.style.display = "none";

//     }
// })



mediumButton.addEventListener("click",()=>{
    difficultyScreen.style.display = "none";
    mediumGameScreen.style.display='block';
})

hardButton.addEventListener("click",()=>{
    difficultyScreen.style.display = "none";
    hardGameScreen.style.display='block';
})

