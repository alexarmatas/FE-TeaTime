const IMAGES = document.querySelectorAll("img");
const imageArray = Array.from(IMAGES);
const gameCharacter;



//Game Start 
IMAGES.forEach( img => img.addEventListener('click', onListener));

function onListener(){
        gameCharacter = (event.target.nextSibling).nextSibling.innerText;
        gameCharacter = gameCharacter.toLowerCase();
        localStorage.setItem("gameCharacter", gameCharacter)    
}



//Chat Options Class

class ChatOptions{
    constructor(good, neutral, bad){
        this.good = good;
        this.neutral = neutral;
        this.bad = bad;
    }
}

//Character Class
class Character{
    constructor(name, imgFolder, chatOptions){
        this.name = name;
        this.imgFolder = imgFolder;
        this.chatOptions = chatOptions;
    }
}


const azura = new Character('azura', 'images\azuraFace\azuraSmile.png',  new ChatOptions(['0','1','2','3','4','5'], ['6','7','8','9','10'], ['11','12','13','14','15']));

 

//remove other backgrounds files and then transition

//Transition into the game start scene





//function that  finds out which image has been clicked

//switch statement based off of what we get
//const characterChosen = (function event click listener)


//run css animations?