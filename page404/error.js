/*
 * Doc Javascript - Error 404 
 */


function fall(){
    button.src="cadeau.png"
}

function switch(){
    image_cadeau.src="cadeau2.png";     
}

function setupListener() {
    //button.addEventListener("click",fall);
    button.addEventListener("click",switch)
    
}

var button = document.getElementById("present_button")
var image_cadeau = document.getElementById("cadeau")

setupListener()
