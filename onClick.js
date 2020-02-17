const IMAGES = document.querySelectorAll("img");
const imageArray = Array.from(IMAGES);
const hearts_p = document.querySelectorAll(".scoreText");
const questions_p = document.querySelectorAll(".gameText");
var gameCharacter = "";
var game_img = document.querySelector("#gameImage");

const goodAnswers = [];
const neutralAnswers = [];
const badAnswers = [];
const maxRounds = 5;




//HomePage Functions


const listener = (event) => {
    let eventTarget = event.target;
    gameSet(eventTarget); 
} 



   
function addListeners(){
    IMAGES.forEach( img => img.addEventListener('click', listener));
}

function gameSet(target){
        gameCharacter = (target.nextSibling).nextSibling.innerText;
        gameCharacter = gameCharacter.toLowerCase();
        localStorage.setItem("gameCharacter", gameCharacter);
        window.location.href = "gameStart.html";
  
}

//GamePage 
//Make the characterRoute function start on the new page


//Game Engine


function characterRoute(){
    gameCharacter = localStorage.getItem("gameCharacter");
    switch(gameCharacter){
        case "azura":
            characterGame(azura);
            break;

        case "anna":
            characterGame(anna);
            break;
   
        //case forrest:

        //case leo:

        //case marth:

        //case odin:
    }

}

//draw the answers 

//get player input that returns values 

function random(length){
    let randomValue = Math.floor(Math.random() * length);
    return randomValue;
}

function characterGame(character){
    game_img.src = character.images.base;
    let roundNumber = 0;
    let playerScore = 0;
    //inside the loop
    let goodChoice = character.chatOptions.good.splice(random(character.chatOptions.good.length),1);
    let neutralChoice = character.chatOptions.neutral.splice(random(character.chatOptions.neutral.length),1);
    let badChoice = character.chatOptions.bad.splice(random(character.chatOptions.bad.length),1);
    let choiceArray = [goodChoice, neutralChoice, badChoice];
    let passArray = [goodChoice, neutralChoice, badChoice];
    let drawArray = [];
    
    for(let i=0; i < 3; i++){
        drawArray.push(choiceArray.splice(random(choiceArray.length), 1));
    }
    for(let i=0; i < 3; i++){
        questions_p[i].innerHTML = drawArray[i];
        questions_p[i].addEventListener('click', (event) =>{
            let eventTarget = event.target;
            console.log(typeof eventTarget.innerHTML);
            console.log(typeof passArray[0]);
            switch(eventTarget.innerText){
                case passArray[0]:
                    console.log("win");
                    break;

                case passArray[1]:
                    console.log("neutral");
                    break;

                case passArray[2]:
                    console.log("lose");
                    break;
            }

        });
    }
 
}


//Chat Options Class

class ChatOptions{
    constructor(good, neutral, bad){
        this.good = good;
        this.neutral = neutral;
        this.bad = bad;
    }
}

//Images Class

class charImages{
    constructor(base, smile, frown){
        this.base = base;
        this.smile = smile;
        this.frown = frown;
    }
}

//Character Class
class Character{
    constructor(name, images, chatOptions){
        this.name = name;
        this.images = images;
        this.chatOptions = chatOptions;
    }
}


const azura = new Character('azura', new charImages('images/azura/azuraBase.png', 'images/azura/azuraSmile.png', 'images/azura/azuraFrown.png') ,
  new ChatOptions(['a','b','c','d','e','f'], ['g','h','i','j','k','l'], ['m','n','o','p','q','r']));

const anna = new Character('azura', new charImages('images/anna/annaBase.png', 'images/anna/annaSmile.png', 'images/anna/annaFrown.png'),
  new ChatOptions(['0','1','2','3','4','5'], ['6','7','8','9','10','10'], ['11','12','13','14','15','16']));

 

//remove other backgrounds files and then transition

//Transition into the game start scene





//function that  finds out which image has been clicked

//switch statement based off of what we get
//const characterChosen = (function event click listener)


//run css animations?