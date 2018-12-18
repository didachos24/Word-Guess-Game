// Initial conditions
var capitals = ["bogota", "medellin", "cali", "barranquilla", "cartagena"];

// Create variables
var wins = 0, mycity, cityspaces, guess, fail = 0, wrong = "", cityspaces = "", isInCapital = false;
var spaces = document.getElementById("tries");

// Pick a city
var mycity = capitals[Math.floor(Math.random() * capitals.length)];
console.log("City to guess: " + mycity);
console.log("Number of spaces to guess: " + mycity.length)

// Number of spaces to guess
    for (i=0; i < mycity.length; i++) {
        cityspaces = cityspaces + "_ ";
    }
    console.log(cityspaces);
    // document.getElementById("spaces") = cityspaces;

// Start the game, pick a letter
    document.onkeyup = function(event) {

    // Guess letter as variable
        guess = event.key;

    // Compare guess with each letter in capital city
        for (i=0; i < mycity.length; i++) {
            let = mycity.charAt(i);

        //Is guess in capital city? Yes, print letter in array
            if( let == guess) {
                cityspaces = cityspaces.replace(i, let);
            }
            console.log(cityspaces);

        }
    }
