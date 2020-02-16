const IMAGES = document.querySelectorAll("img");
const imageArray = Array.from(IMAGES);
const hearts_p = document.querySelectorAll(".scoreText");
const questions_p = document.querySelectorAll(".gameText");
var gameCharacter = "";
var gameImage = "";
const goodAnswers = [];
const neutralAnswers = [];
const badAnswers = [];


//Game Start 
IMAGES.forEach( img => img.addEventListener('click', onListener));

function onListener(){
        let eventTarget = event.target;
        gameSet(eventTarget);
        gameStart();
        //our main image won't load until our function finishes!!!

}

function gameSet(target){
        gameCharacter = (target.nextSibling).nextSibling.innerText;
        gameCharacter = gameCharacter.toLowerCase();
        localStorage.setItem("gameCharacter", gameCharacter)
        gameCharacter = localStorage.getItem("gameCharacter");
        window.location.href = "gameStart.html";

}



function gameStart(){
    console.log(document.images)
}





//Game Engine

function characterRoute(character){
    switch(character){
        case "azura":
            console.log(azura.images.base);
            document.getElementById('gameImage') = azura.images.base;

        case "anna":
            console.log(anna.images.base);
            avatar_img.src = anna.images.base;

        //case forrest:

        //case leo:

        //case marth:

        //case odin:
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
  new ChatOptions(['0','1','2','3','4','5'], ['6','7','8','9','10'], ['11','12','13','14','15']));

const anna = new Character('azura', new charImages('images/anna/annaBase.png', 'images/anna/annaSmile.png', 'images/anna/annaFrown.png'),
  new ChatOptions(['0','1','2','3','4','5'], ['6','7','8','9','10'], ['11','12','13','14','15']));

 

//remove other backgrounds files and then transition

//Transition into the game start scene





//function that  finds out which image has been clicked

//switch statement based off of what we get
//const characterChosen = (function event click listener)


//run css animations?