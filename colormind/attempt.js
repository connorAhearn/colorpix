/**
 * Example program for using colormind to make a colorscheme from provided colors
 */

// XMLHttpRequest is used to make API requests to colormind
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var http = new XMLHttpRequest();
var url = "http://colormind.io/api/";

// The data object is what's sent to the API for response information
var data = {
	model : "default",
	/**
	 * Input argument types:
	 * 
	 * color: [x, y, z] where x y and z are numbers
	 * none: "N" where the API infers a color that will work in this position
	 */
	input : [[44,43,44],[90,83,82],"N","N","N"]
}

// Event listener that prints a colorscheme anytime a successful API request is made
http.onreadystatechange = function() {
	if(http.readyState == 4 && http.status == 200) {
        var palette = JSON.parse(http.responseText).result;
        console.log(palette);
	}
}

// Example API request
http.open("POST", url, true);
http.send(JSON.stringify(data));