//declare all things I need on the DOM
const IMAGES = document.querySelectorAll("img");

const imageArray = Array.from(IMAGES);

function removableFunction(){
        const selectedImage = event.target;
        const nonSelected = imageArray.filter((image) => image != event.target);
        nonSelected.forEach( function(img){

            img.style.opacity = "0";
        });
        IMAGES.forEach( img => img.removeEventListener('click', removableFunction));
    }

IMAGES.forEach( img => img.addEventListener('click', removableFunction));



//function that  finds out which image has been clicked

//switch statement based off of what we get
//const characterChosen = (function event click listener)


//run css animations?