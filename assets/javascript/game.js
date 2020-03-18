// Initial conditions
var capitals = [
    "bogota", 
    "medellin", 
    "cali", 
    "barranquilla", 
    "cartagena", 
    "neiva", 
    "popayan", 
    "mitu", 
    "pasto", 
    "pereira", 
    "tunja", 
    "bucaramanga"
];

// Variables
var wins = 0;
var mycity;
var letcounter = 0;
var cityspaces = []; 
var guesses = 0; 
var fails = 0;
var wrong = "";
var logic = false;
var alpha = /^[A-Za-z]/;

// Pick a city function. Takes a city from cities array
mycity = capitals[Math.floor(Math.random() * capitals.length)];

// Amount of letters in city 
letcounter = mycity.length;

// Console log variables
console.log("City: " + mycity + "\nNumber of letters: " + mycity.length);

// Push spaces in an array, each space as an element to fill that indicates the letters to guess
for (i=0; i < mycity.length; i+=1) {
    cityspaces.push(" _ ");
}

// Start the game, press a letter
    document.onkeyup = function(guess) {

    // Push the array with spaces to guess in HTML 
    document.getElementById("spaces").innerHTML = cityspaces;

    // Tell how many letters there are to guess
    document.getElementById("letters").innerHTML = "\n Letters to guess " + letcounter 

    // Guess letter as variable
        guess = event.key;

        // Conditional to check for a letter pressed
        if(guess.match(alpha) //&& guess.getModifierState()) {
            ){

            guess = guess.toLowerCase();

            // Compare guess with each letter in capital city
            for (var i = 0; i < mycity.length; i++) {
        
                let = mycity.charAt(i);
        
                // If guess is in mycity, print 
        
                    if( let == guess) {
                        
                        let = let.toUpperCase();
                        guesses +=1 ;
                        logic = true;
                        cityspaces[i] = let;
                        letcounter -= 1;
                        document.getElementById("spaces").innerHTML = cityspaces + " Letters to guess " + letcounter;
                        if(guesses >= mycity.length) {
                            document.getElementById("image-result").style.height="400px";
                            document.getElementById("image-result").style.weight="600px";
                            document.getElementById("image-result").src = "assets/images/" + mycity + ".jpg";
                            alert("Congratulations, You Win!!!");
        
                            document.getElementById("image-result")
                        }
                
                    } 
                } 
        
            if ( logic == false ) {  
                
                guess = guess.toUpperCase();
                wrong += guess + " ";
                fails += 1;
                document.getElementById("bad-try").innerHTML = "Wrongs: " + wrong;
                document.getElementById("fails").innerHTML = "Fails: " + fails;
                
                if ( fails > 4) {
                    document.getElementById("image-result").src = "assets/images/hanged.jpg";
                    alert("Game over!");
                }
        
            }
        
                logic = false;
        
            
        } else {
            alert("Please select a letter")
        };

}