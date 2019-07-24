/**
 * Component of our application that pulls colours from the user's provided image.
 * 
 * This is done using the Clairifai API
 */

// Clairifai API setup
const Clairifai = require('clarifai');
const clairifai = new Clairifai.App({
    apiKey: 'c26e87bf7b044541b1552ea7b880fff3'
});

/**
 * Base function of the module
 * Added callback for synchronous functionality
 */
module.exports = function (image_url, callback) {
    let image_colors = [];

    // Clarifai API call
    clairifai.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", image_url).then(
        function (response) {

            // Extracts all the colours that have been picked up, puts into our array
            let all_colors = response.outputs[0].data.colors;

            // Loop through all the colours
            all_colors.forEach(function (color_obj) {

                // Defines percentage of the image taken up by this colour
                let percentage = color_obj.value * 100;

                // If the colour is prominent enough, add it to our response
                if (percentage >= 20) {

                    // Adding the colour to the array
                    image_colors.push(color_obj.raw_hex);
                }
            });
        },
        function (error) {
            console.log(error);
        }

    ).then(
        function () {
            callback(image_colors);
        }
    );

    // If the function runs into a strange error, return an empty array
    return [];
    
}

// test function call
// getColors("https://portal.clarifai.com/cms-assets/20180320213204/color-003.jpg");