// Initial conditions
var capitals = ["bogota", "medellin", "cali", "barranquilla", "cartagena"];

// Create variables
var wins = 0, mycity;
var cityspaces = ""; 
// guess, 
var fails = 0;
var wrong = "";
logic = false;

// Pick a city
var mycity = capitals[Math.floor(Math.random() * capitals.length)];
console.log("City to guess: " + mycity);
console.log("Number of spaces to guess: " + mycity.length)

// Number of spaces to guess
    for (i=0; i < mycity.length; i+=1) {
        cityspaces = cityspaces + "_";
    }
    console.log(cityspaces, cityspaces.length);


// Start the game, pick a letter
    document.onkeyup = function(event) {

    // Change spaces to fill with guessed letters and advice how many letters are
    document.getElementById("spaces").innerHTML = cityspaces + " Letters to guess " + cityspaces.length ; // Doesn't show in index*********

    // Guess letter as variable
        guess = event.key;

    // Compare guess with each letter in capital city
    for ( var i = 0 ; i < mycity.length; i++) {

        let = mycity.charAt(i);

        // If guess is in mycity, print 

            if( let == guess) {
             
                logic = true;
                // cityspaces.replace.charAt(i) = let;
                // document.getElementById("spaces") = cityspaces;
                console.log(let, cityspaces,logic);
            } 
        } 
    if ( logic == false ) {  
   
        wrong += guess + " ";
        fails += 1;
        console.log(fails);
        document.getElementById("bad-try").innerHTML = "Wrong guesses: " + wrong;
        document.getElementById("fails").innerHTML = "Number of fails: " + fails;
        
        if ( fails > 4) {
            alert("Game over!");
        }
    }

        logic = false;
}

