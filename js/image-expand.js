

function expandImage(){
    document.getElementById("myModal").style.display = "flex";
}


function closeImage() { 
    document.getElementById("myModal").style.display = "none";
}

//Switches main picture when you click on icons in carousel
function switchImage(imgID, biggerPicture){
    const bigPicture = document.getElementById(biggerPicture);
    const smallpic = document.getElementById(imgID).src;
    bigPicture.src = smallpic;
}

function everything(imgID,biggerPicture){
    expandImage();
    switchImage(imgID, biggerPicture);
}