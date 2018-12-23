// Initial conditions
var capitals = ["bogota", "medellin", "cali", "barranquilla", "cartagena"];

// Create variables
var wins = 0;
var mycity;
var letcounter = 0;
var cityspaces = []; 
var guesses = 0; 
var fails = 0;
var wrong = "";
logic = false;

// Pick a city
mycity = capitals[Math.floor(Math.random() * capitals.length)];
letcounter = mycity.length;
console.log("City to guess: " + mycity);
console.log("Number of spaces to guess: " + mycity.length)

// Number of spaces to guess
    for (i=0; i < mycity.length; i+=1) {
        cityspaces.push("__");
    }


// Start the game, pick a letter
    document.onkeyup = function(event) {

    // Change spaces to fill with guessed letters and advice how many letters are
    document.getElementById("spaces").innerHTML = cityspaces + " Letters to guess " + letcounter; 

    // Guess letter as variable
        guess = event.key;
        guess1 = guess.toLowerCase();

    // Compare guess with each letter in capital city
    for ( var i = 0 ; i < mycity.length; i++) {

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
                    document.getElementById("image-result").src = "assets/images/" + mycity + ".jpg";
                    alert("Congratulations, You Win!!!");
                }
        
            } 
        } 
    if ( logic == false ) {  
        
        guess = guess.toUpperCase();
        wrong += guess + " ";
        fails += 1;
        document.getElementById("bad-try").innerHTML = "Wrong guesses: " + wrong;
        document.getElementById("fails").innerHTML = "Number of fails: " + fails;
        
        if ( fails > 4) {
            document.getElementById("image-result").src = "assets/images/hanged.jpg";
            alert("Game over!");
        }

    }

        logic = false;
}