var express = require('express');
var router = express.Router();

// NPM module for checking if a url is valid - Ideally would like to remove later
var validUrl = require('valid-url');

/* GET home page. */
router.get('/', function(req, res, next) {
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
router.post('/url', function(req, res) {
  
  // Taking the user input from the POST request
  let image_url = req.body.image;
  
  // Form response message - will be filled conditionally
  let form_response;

  // Checking if the image url is valid using the valid-url package
  if(validUrl.isUri(image_url)) {
    form_response = "It's a valid url!";
  }
  else {
    form_response = "It's not a url!";
  }

  // Send the response to the user
  res.send(form_response);

});

module.exports = router;
