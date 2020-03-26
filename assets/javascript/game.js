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
var pressedKeys = [];

// Pick a city function. Takes a city from cities array
mycity = capitals[Math.floor(Math.random() * capitals.length)];

// Amount of letters in city 
letcounter = mycity.length;

// Console log variables
// console.log("City: " + mycity + "\nNumber of letters: " + mycity.length);

// Push spaces in an array, each space as an element to fill that indicates the letters to guess
for (i=0; i < mycity.length; i+=1) {
    cityspaces.push(" _ ");
}

// Start the game, press a letter
document.onkeyup = function(guess) {

    // Push the array with spaces to guess in index.html 
    document.getElementById("spaces").innerHTML = cityspaces;

    // Tell how many letters there are to guess
    document.getElementById("letters").innerHTML = "Letters to guess " + letcounter 

    // Guess letter as variable
    guess = event.key;

    // Conditional to check for a letter pressed, only alphabetic option
    if(guess.match(alpha) && guess.length == 1) {

        // Check if the key was pressed
        if(!pressedKeys.includes(guess)) {

            // To lower case to match with city from array
            guess = guess.toLowerCase();

            // Compare guess with each letter in capital city
            for (var i = 0; i < mycity.length; i++) {
        
                let letter = mycity.charAt(i);
        
                // If guess is in mycity, print 
                if( letter == guess) {
                    
                    // letter to upper case to print in index.html
                    letter = letter.toUpperCase();
                    // Add 1 to guesses. This variable is used to check final of the game
                    guesses +=1 ;
                    logic = true;
                    // Insert guess in spaces array
                    cityspaces[i] = letter;
                    // Insert guess in array to not repeat keys
                    pressedKeys.push(guess);
                    // console.log(pressedKeys);
                    // One less letter to guess
                    letcounter -= 1;
                    // Print guess and modify spaces in index.html
                    document.getElementById("spaces").innerHTML = cityspaces;
                    // Print amount of letters remaining to guess
                    document.getElementById("letters").innerHTML = " Letters to guess " + letcounter;
                    // Conditional that check if user finish game checking if amount of letters in guesses is bigger than micity
                    // If conditional, user win and print the city
                    if(guesses >= mycity.length) {
                        document.getElementById("image-result").style.height="400px";
                        document.getElementById("image-result").style.weight="600px";
                        document.getElementById("image-result").src = "assets/images/" + mycity + ".jpg";
                        alert("Congratulations, You Win!!!");
                    }
                
                } 
            } 

            // If letter is not in mycity
            if ( logic == false ) {  

                // Insert guess in array to not repeat keys
                pressedKeys.push(guess);
                // Guess to upper case 
                guess = guess.toUpperCase();
                // Add guess in wrong array to print index.html
                wrong += guess + " ";
                // Add one in fails counter to finish game 
                fails += 1;
                // Print wrongs in index.html
                document.getElementById("bad-try").innerHTML = "Wrongs: " + wrong;

                // Conditional to check if user losts 
                if ( fails > 4) {
                    // If user losts print hanged man and finish game
                    document.getElementById("image-result").src = "assets/images/hanged.jpg";
                    alert("Game over!");
                }
        
            }
        } else {
            // If key was pressed, alert user
            alert("Key used previously.")
        }

        // Restart press key event
        logic = false;
        
    } else {
        // Alert the user to select an alphabetic key
        alert("Please select a letter.");
    };

};