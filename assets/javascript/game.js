// Initial conditions
var capitals = ["bogota", "medellin", "cali", "barranquilla", "cartagena"];

// Create variables
var wins = 0, mycity, cityspaces = "", guess, fail = 0, wrong = "", cityspaces = "", isInCapital = false;
var spaces = document.getElementById("tries");

// Pick a city
var mycity = capitals[Math.floor(Math.random() * capitals.length)];
console.log("City to guess: " + mycity);
console.log("Number of spaces to guess: " + mycity.length)

// Number of spaces to guess
    for (i=0; i < mycity.length; i+=1) {
        cityspaces = cityspaces + "_";
    }
    console.log(cityspaces, cityspaces.length);
    // document.getElementById("spaces") = cityspaces; // Doesn't show in index*********

// Start the game, pick a letter
    document.onkeyup = function(event) {

    // Guess letter as variable
        guess = event.key;

    // Compare guess with each letter in capital city
    for (i=0; i < mycity.length; i++) {

// ************ Here is working************

        //Is guess in capital city? Yes, print letter in array
            if(mycity.charAt(i) == guess) {
                // cityspaces.charAt(i) = guess; // Here is the problem*************
            } else {
                wrong += guess;
                fail += 1;
                // document.getElementById("wrong") = wrong;
                console.log(wrong, fail);
            }

        
        }
    }