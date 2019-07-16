// XMLHttpRequest is used to make API requests to colormind
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const http = new XMLHttpRequest();
const url = "http://colormind.io/api/";

// Converts hex codes to an RGB array of size 3
const hex = require('./hex_to_rgb_converter');

const get_scheme = function (colors, callback) {

    let inputs = [];

    // For each color provided, add the RGB value to our input array
    colors.forEach(function (color) {
        inputs.push(hex(color));
    });

    // Have our other 5 color slots filled
    for (let i = inputs.length; i < 6; i++) {
        inputs.push("N");
    }

    // Input object that is sent to the API
    let data = {
        model: "default",
        input: inputs
    }

    // Event listener that prints a colorscheme anytime a successful API request is made
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            let palette = JSON.parse(http.responseText).result;
            callback(palette);
        }
    }

    http.open("POST", url, true);
    http.send(JSON.stringify(data));
}

//console.log(get_scheme(["#223344", "#000588"]));

module.exports = get_scheme;