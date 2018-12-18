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


// Start the game, pick a letter
    document.onkeyup = function(event) {

    // Guess letter as variable
        guess = event.key;

    // Compare guess with each letter in capital city
        for (i=0; i < mycity.length; i++) {
            let = mycity.charAt(i);

        //Is guess in capital city? Yes, print letter in array
            if( let == guess) {
                cityspaces.chatAt(i) = let;
                console.log(i);
            }
            }
        // No, +1 fail, print letter in wrong
        // if(isInCapital = false) {
        //     fail += 1;
        //     wrong = wrong + guess;
        //     // 5 fails, finish
        //     if(fail = 5){
        //         alert("Game Over");
        //         alert("The city is " + mycity);
        //     }
        }



    console.log(guess, fail, wrong);
