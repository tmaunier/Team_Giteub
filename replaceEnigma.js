
document.addEventListener('DOMContentLoaded', function(){
    main();
});

function updateEnigma(i){
    document.getElementById("enigma").innerHTML =  listeEnigmes[i]
}



function main(){

    let enigmaNum = 0;
    const response_field = document.getElementById("response");

    updateEnigma(enigmaNum);

	
	
    response_field.addEventListener('keydown', function(event) {
	if (event.key === "Enter") {
	    
	    
	    if (response_field.value.toLowerCase() === (reponses[enigmaNum])){
		
		alert("bravo ! bonne reponse");
		enigmaNum++;
		if (enigmaNum < listeEnigmes.length){
		    updateEnigma(enigmaNum);
		} else {
		    alert("Bravissimo ! Vous avez reussit tous les enigmes !")
		    window.location.href = "mainPage.html";

		    
		}
		
		
	    } else { alert("Mauvaise reponse, reessayez !");}
	    // Do work
	}
    });
    

    








}
