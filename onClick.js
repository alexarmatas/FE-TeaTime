//declare all things I need on the DOM
const IMAGES = document.querySelectorAll("img");
const IMAGETEXT = document.querySelectorAll(".imgText");
const STARTTEXT = document.querySelector(".startText");

const imageArray = Array.from(IMAGES);
const imageTextArray = Array.from(IMAGETEXT);

function onListener(){
        const selectedImage = event.target;
        const nonSelected = imageArray.filter((image) => image != event.target);
        nonSelected.forEach( img => img.style.opacity ="0"); 
        imageTextArray.forEach(function(txt){
            txt.style.transition ="2s";
            txt.style.opacity ="0";
        });
        STARTTEXT.style.transition = "2s";
        STARTTEXT.style.opacity = "0";
        IMAGES.forEach( img => img.removeEventListener('click', onListener));

    }

IMAGES.forEach( img => img.addEventListener('click', onListener));


//Transition into the game start scene





//function that  finds out which image has been clicked

//switch statement based off of what we get
//const characterChosen = (function event click listener)


//run css animations?