// Initial conditions
var capitals = ["bogota", "medellin", "cali", "barranquilla", "cartagena"];
var wins = 0;
var remain = 0;
var mycity;

// Create variables to hold references
// var randomCity = document.getElementById("randomCity");


document.onkeyup = function(event) {

    // Pick a city
    var mycity = capitals[Math.floor(Math.random() * capitals.length)];
    console.log(mycity);
    console.log(mycity.length)

    // Print spaces for guess
    for (i=0; i < mycity.length; i++) {
        document.getElementById("randomCity.innerHTML") += "_ ";
    }
}