const IMAGES = document.querySelectorAll("img");
const hearts_p = document.querySelectorAll(".scoreText");
const questions_p = document.querySelectorAll(".gameText");
var gameCharacter = "";
var game_img = document.querySelector("#gameImage");

//HomePage Functions
function gameSet(target){
    gameCharacter = (target.nextSibling).nextSibling.innerText;
    gameCharacter = gameCharacter.toLowerCase();
    localStorage.setItem("gameCharacter", gameCharacter);
    window.location.href = "gameStart.html";
}

const listener = (event) => {
    let eventTarget = event.target;
    gameSet(eventTarget); 
} 

function addListeners(){
    IMAGES.forEach( img => img.addEventListener('click', listener));
}

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
   
        case "forrest":
            characterGame(forrest);
            break;

        case "leo":
            characterGame(leo);
            break;

        case "marth":
            characterGame(marth);
            break;

        case "odin":
            characterGame(odin);
            break;
    }

}



//number randomizer
function random(length){
    let randomValue = Math.floor(Math.random() * length);
    return randomValue;
}

//Gets the Original Answers and the Answers in random order
function randomQuestion(character){
    let goodChoice = character.chatOptions.good.splice(random(character.chatOptions.good.length),1);
    let neutralChoice = character.chatOptions.neutral.splice(random(character.chatOptions.neutral.length),1);
    let badChoice = character.chatOptions.bad.splice(random(character.chatOptions.bad.length),1);
    let choiceArray = [goodChoice, neutralChoice, badChoice];
    let originalAnswers = [];
    let randomAnswers = [];
    for(i = 0; i < choiceArray.length; i++){
       originalAnswers.push(choiceArray[i][0]);
    }
    let clone = [].concat(originalAnswers);
    for(i = 0; i < choiceArray.length; i++){
        let randomNumber = random(2);
        if(randomNumber == 0){
            randomAnswers.push(clone.pop());
        } else{
            randomAnswers.push(clone.shift());
        }
    }
    return [originalAnswers, randomAnswers];
}

var questions = [];
var originalQuestions = [];
var randomQuestions = [];
var maxRounds = 5;
var roundNumber = 0;
var playerScore = 0;
var winningScore = 3;
var characterName = ""

function gameResult(){
   
    //change DOM
    if(playerScore >= winningScore ){
        //winner DOM
        game_img.src = characterName.images.smile;
        questions_p.forEach((p) => p.innerHTML = "YOU WIN");
    } else{
        game_img.src = characterName.images.frown;
        questions_p.forEach((p) => p.innerHTML = "YOU LOSE");

    }
}
   


function game(event){
    let eventTarget = event.target;
    switch(eventTarget.innerHTML){
        case originalQuestions[0]:
            eventTarget.classList.add('green-glow');
            game_img.src = characterName.images.smile;
            setTimeout(() => {
                eventTarget.classList.remove('green-glow');
                game_img.src = characterName.images.base;}, 1000);
            hearts_p[roundNumber].style.color = "#A7E9AF";
            playerScore++;
            hearts_p[roundNumber].classList.remove('scoreSpin');
            roundNumber++;
            if(roundNumber < maxRounds){
                hearts_p[roundNumber].classList.add('scoreSpin');
                questions = randomQuestion(characterName);
                originalQuestions = questions[0];
                randomQuestions = questions[1];
                for(let i = 0; i < 3; i++){
                    questions_p[i].innerHTML = randomQuestions[i];
                }
            }else{
                gameResult();
            }
            break;

        case originalQuestions[1]:
            eventTarget.classList.add('gray-glow');
            setTimeout(() => eventTarget.classList.remove('gray-glow'), 1000);
            hearts_p[roundNumber].style.color = "#ADB0BF";
            hearts_p[roundNumber].classList.remove('scoreSpin');
            roundNumber++;
            if(roundNumber < maxRounds){
                hearts_p[roundNumber].classList.add('scoreSpin');
                questions = randomQuestion(characterName);
                originalQuestions = questions[0];
                randomQuestions = questions[1];
                for(let i = 0; i < 3; i++){
                    questions_p[i].innerHTML = randomQuestions[i];
                }
            }else{
                gameResult();
            }
            break;

        case originalQuestions[2]:
            eventTarget.classList.add('red-glow');
            game_img.src = characterName.images.frown;
            setTimeout(() => {
                eventTarget.classList.remove('red-glow')
                game_img.src = characterName.images.base;}, 1000);
            hearts_p[roundNumber].style.color = "#fa163f";
            playerScore--;
            hearts_p[roundNumber].classList.remove('scoreSpin');
            roundNumber++;
            if(roundNumber < maxRounds){
                hearts_p[roundNumber].classList.add('scoreSpin');
                questions = randomQuestion(characterName);
                originalQuestions = questions[0];
                randomQuestions = questions[1];
                for(let i = 0; i < 3; i++){
                    questions_p[i].innerHTML = randomQuestions[i];
                }
            }else{
                gameResult();
            }
            break;
    }

}

function characterGame(character){
    characterName = character;
    game_img.src = characterName.images.base;
    hearts_p[roundNumber].classList.add('scoreSpin');
    questions = randomQuestion(characterName);
    originalQuestions = questions[0];
    randomQuestions = questions[1];
    for(let i = 0; i < 3; i++){
        questions_p[i].innerHTML = randomQuestions[i];
    }
    questions_p[0].addEventListener('click', () => game(event));
    questions_p[1].addEventListener('click', () => game(event));
    questions_p[2].addEventListener('click', () => game(event));

   
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

const forrest = new Character('forrest', new charImages('images/forrest/forrestBase.png', 'images/forrest/forrestSmile.png', 'images/forrest/forrestFrown.png'),
new ChatOptions(['0','1','2','3','4','5'], ['6','7','8','9','10','10'], ['11','12','13','14','15','16']));

const leo = new Character('leo', new charImages('images/leo/leoBase.png', 'images/leo/leoSmile.png', 'images/leo/leoFrown.png'),
new ChatOptions(['0','1','2','3','4','5'], ['6','7','8','9','10','10'], ['11','12','13','14','15','16']));

const marth = new Character('marth', new charImages('images/marth/marthBase.png', 'images/marth/marthSmile.png', 'images/marth/marthFrown.png'),
new ChatOptions(['0','1','2','3','4','5'], ['6','7','8','9','10','10'], ['11','12','13','14','15','16']));

const odin = new Character('odin', new charImages('images/odin/odinBase.png', 'images/odin/odinSmile.png', 'images/odin/odinFrown.png'),
new ChatOptions(['0','1','2','3','4','5'], ['6','7','8','9','10','10'], ['11','12','13','14','15','16']));
 

//remove other backgrounds files and then transition

//Transition into the game start scene





//function that  finds out which image has been clicked

//switch statement based off of what we get
//const characterChosen = (function event click listener)


//run css animations?