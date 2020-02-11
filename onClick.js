//declare all things I need on the DOM

const IMAGES = document.querySelectorAll("img");
const IMAGETEXT = document.querySelectorAll(".imgText");
const STARTTEXT = document.querySelector(".startText");

const imageArray = Array.from(IMAGES);
const imageTextArray = Array.from(IMAGETEXT);

function opacityTransition(nonSelected){
    console.log();
    nonSelected.forEach( img => img.style.opacity ="0"); 
    imageTextArray.forEach(function(txt){
        txt.style.transition ="1s";
        txt.style.opacity ="0";
    });
    STARTTEXT.style.transition = "1s";
    STARTTEXT.style.opacity = "0";
    IMAGES.forEach( img => img.removeEventListener('click', onListener));
}

function removeChildNode(nonSelected){
    for(let i = 0; i < nonSelected.length; i++){;
        let parent = nonSelected[i].parentNode;
        parent.removeChild(nonSelected[i]);
    }

}


function onListener(){
        const selectedImage = event.target;
        const nonSelected = imageArray.filter((image) => image != event.target);
        opacityTransition(nonSelected);
        removeChildNode(nonSelected);
        
}

IMAGES.forEach( img => img.addEventListener('click', onListener));

//remove other backgrounds files and then transition

//Transition into the game start scene





//function that  finds out which image has been clicked

//switch statement based off of what we get
//const characterChosen = (function event click listener)


//run css animations?