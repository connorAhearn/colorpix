// Standard express router imports
const express = require('express');
const router = express.Router();

// Internal module for extrapolating colors from an image
const get_colors = require('../logic/get_colors');

// Internal module for filling a color scheme with ML generated colors
const get_scheme = require('../logic/get_scheme');

// NPM module for checking if a url is valid - Ideally would like to remove later
const validUrl = require('valid-url');



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Colorpix' });
});

/**
 * POST basic image url & Response
 * 
 * As of July 7th 2019, this uses a basic string that's sent 
 * to describe the url status.
 * 
 * Next steps will be to render webpages for each response
 */
router.post('/url', function (req, res) {

  // Taking the user input from the POST request
  let imageUrl = req.body.image;

  // Checking if the image url is valid using the valid-url package
  if (validUrl.isUri(imageUrl)) {

    // the fileExtensionCheck utility function is written near the bottom of the file
    if (fileExtensionCheck(".png", imageUrl) || fileExtensionCheck(".jpg", imageUrl) || fileExtensionCheck(".jpeg", imageUrl)) {

      // check get_colors.js to see this module
      get_colors(imageUrl, function (colors) {

        // check get_scheme.js to see this module
        get_scheme(colors, function (color_scheme) {

          // Renders the result webpage with the resulting colorscheme
          res.render('result', { title: "Results", image_colors: color_scheme });

        });
      });

    }
    else {
      res.send("This URL doesn't point to an image: " + imageUrl);
    }

  }
  else {
    res.send("This isn't a valid URL: " + imageUrl);
  }

});

/**
 * Checks the file type of the provided URL. True if its what you're looking for, False if it isn't
 * 
 * @param {String} extension - File extension you're checking for at the end of the URL
 * @param {String} url - The URL in question
 */
function fileExtensionCheck(extension, url) {
  if (extension === ".png" || extension === ".jpg") return url.indexOf(extension, url.length - 4) != -1;
  else if(extension === ".jpeg") return url.indexOf(extension, url.length - 5) != -1;
  else return false;
}

module.exports = router;
