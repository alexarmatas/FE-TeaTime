const IMAGES = document.querySelectorAll("img");
const IMAGETEXT = document.querySelectorAll(".imgText");
const STARTTEXT = document.querySelector(".startText");
const annaColumn = document.querySelector(".col-2")
const imageArray = Array.from(IMAGES);
const imageTextArray = Array.from(IMAGETEXT);
var gameImage;
var gameCharacter;
function opacityTransition(images){
    console.log();
    images.forEach( img => img.style.opacity ="0"); 
    imageTextArray.forEach(function(txt){
        txt.style.transition ="1s";
        txt.style.opacity ="0";
    });
    STARTTEXT.style.transition = "1s";
    STARTTEXT.style.opacity = "0";
    IMAGES.forEach( img => img.removeEventListener('click', onListener));
}

function removeChildNode(){
    for(let i = 0; i < imageArray.length; i++){;
        let parentImage = imageArray[i].parentNode;
        let parentText = imageTextArray[i].parentNode;
        parentImage.removeChild(imageArray[i]);
        parentText.removeChild(imageTextArray[i]);
    }

}




function onListener(){
        const selectedImage = event.target;
        gameImage = selectedImage.src;
        gameCharacter = (event.target.nextSibling).nextSibling.innerText;
        gameCharacter = gameCharacter.toLowerCase();
        opacityTransition(imageArray);
        setTimeout(removeChildNode, 2000);
        //set the DOM from the objects of character based of chosen character

        
}


IMAGES.forEach( img => img.addEventListener('click', onListener));

//remove other backgrounds files and then transition

//Transition into the game start scene





//function that  finds out which image has been clicked

//switch statement based off of what we get
//const characterChosen = (function event click listener)


//run css animations?