const npcId_div = document.getElementById("npc-id");
const questionNumber_span = document.getElementById("question-number");
const npcExpression_img = document.getElementById("npc-expression");
const startText_p = document.getElementById("startText");
const question1_b = document.getElementById("q1");
const question2_b = document.getElementById("q2");
const question3_b = document.getElementById("q3");

var playerScore = 0;
var roundNumber = 0;
var winningScore = 4;
var maxRounds = 6;

var gameChoices = [
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"
]

var azuraChoices = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"
]

//empty arrays that create the right choice, two wrong choices then shuffles them
var posChoice = [];
var negChoice = [];
var answers = [];



function npcChoice(choices){
    let random = Math.floor(Math.random() * choices.length);
    posChoice.unshift(choices[random]);
    choices.splice(random, 1);
    return choices;
}


function gameChoice(choices){
    for(i = 0; i < 2; i++){
        let random = Math.floor(Math.random()* choices.length);
        negChoice.unshift(choices[random])
        choices.splice(random, 1);    
    } return choices;
}

function answerShuffle(positive, negative){  
    let location = 0; 
    let temp = [];
    answers = positive.concat(negative);
    location = Math.floor(Math.random() * answers.length);
    temp = answers.splice(location, 1); 
    answers = answers.concat(temp);
}

function drawAnswers(){
    question1_b.innerHTML = answers[0];
    question2_b.innerHTML = answers[1];
    question3_b.innerHTML = answers[2];
}

function resetArray(){
    posChoice.splice(0, posChoice.length);
    negChoice.splice(0, negChoice.length);
    answers.splice(0, answers.length);

}

function gameResult(){
    question1_b.style.display = "none";
    question2_b.style.display = "none";
    question3_b.style.display = "none";
    if(playerScore > winningScore){
        startText_p.innerHTML = "You Win!";
    } else{
        startText_p.innerHTML = "You Lose!";
    }
}


function game(userChoice){
    if (userChoice === posChoice[0]){
        console.log("win");
        playerScore++;
        roundNumber++;
        console.log(playerScore, roundNumber);
        resetArray();
        if(roundNumber < maxRounds){
            npcChoice(azuraChoices);
            gameChoice(gameChoices);
            answerShuffle(posChoice, negChoice);
            drawAnswers();
        }else{
            gameResult();
        }
   } else{
        console.log("lose");
        roundNumber++;
        console.log(playerScore, roundNumber);
        resetArray();
        if(roundNumber < maxRounds){
            npcChoice(azuraChoices);
            gameChoice(gameChoices);
            answerShuffle(posChoice, negChoice);
            drawAnswers();
        }else{
            gameResult();
        }
   }
}


//function that starts the game
function initialize(){
    npcExpression_img.removeAttribute("onclick");
    startText_p.innerHTML = "";
    engine();
}


function engine(){
    npcChoice(azuraChoices);
    gameChoice(gameChoices);
    answerShuffle(posChoice, negChoice);
    drawAnswers();
    question1_b.addEventListener('click', () =>game(question1_b.innerText));
    question2_b.addEventListener('click', () => game(question2_b.innerText));
    question3_b.addEventListener('click', () => game(question3_b.innerText));
}




