const body = document.querySelector('body');


body.addEventListener('click', function(e){
    console.log(e.target.className);
    if(e.target.className == 'imgAzura' || 'imgText'){
        console.log(e);
        const img = e.target.parentElement;
        console.log(img);
        console.log(img.parentNode);
        img.parentNode.removeChild(img);

    }
})