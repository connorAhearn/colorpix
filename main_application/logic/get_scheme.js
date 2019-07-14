// XMLHttpRequest is used to make API requests to colormind
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const http = new XMLHttpRequest();
const url = "http://colormind.io/api/";

// Converts hex codes to an RGB array of size 3
const hex = require('./hex_to_rgb_converter');

module.exports = function(colors) {

    let input = [];

    // For each color provided, add the RGB value to our input array
    colors.foreach(function(color) {
        input.push(hex(color));
    });
}