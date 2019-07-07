var express = require('express');
var router = express.Router();

// NPM module for checking if a url is valid - Ideally would like to remove later
var validUrl = require('valid-url');

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

  // Form response message - will be filled conditionally
  let form_response;

  // Checking if the image url is valid using the valid-url package
  if (validUrl.isUri(imageUrl)) {

    // the fileExtensionCheck utility function is written near the bottom of the file
    if (fileExtensionCheck(".png", imageUrl)) {
      form_response = "This is a PNG";
    }
    else if (fileExtensionCheck(".jpg", imageUrl)) {
      form_response = "This is a JPG";
    }
    else {
      form_response = "This url doesn't point to an image";
    }

  }
  else {
    form_response = "It's not a valid url!";
  }

  // Send the response to the user
  res.send(form_response);

});

/**
 * Checks the file type of the provided URL. True if its what you're looking for, False if it isn't
 * 
 * @param {String} extension - File extension you're checking for at the end of the URL
 * @param {String} url - The URL in question
 */
function fileExtensionCheck(extension, url) {
  return url.indexOf(extension , url.length - 4) != -1;
}

module.exports = router;
