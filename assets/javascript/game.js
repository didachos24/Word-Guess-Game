// Initial conditions
var capitals = ["bogota", "medellin", "cali", "barranquilla", "cartagena"];
var wins = 0;
var remain = 0;
var mycity;
var cityspaces;

// Create variables to hold references
    var spaces = document.getElementById("spaces");
    var remain = document.getElementById("remaining");
    var guess, sum = 0, tries = "", cityspaces = "";

// var randomCity = document.getElementById("randomCity");

// Pick a city
var mycity = capitals[Math.floor(Math.random() * capitals.length)];
console.log("City to guess: " + mycity);
console.log("Number of spaces to guess: " + mycity.length)

    // Number of spaces to guess
    for (i=0; i < mycity.length; i++) {
        cityspaces = cityspaces + "_ ";
    }
    console.log(cityspaces);

document.onkeyup = function(event) {
    guess = event.key;
    sum = sum + 1;
    tries = tries + guess;
    if(sum < 5) {
        document.getElementById("spaces").innerHTML =cityspaces;
        document.getElementById("tries").innerHTML = tries;
        
    }

    document.getElementById("spaces").innerHTML = myCity;

    console.log(guess, sum, tries);


}