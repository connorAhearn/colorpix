const Clairifai = require('clarifai');

const app = new Clairifai.App({
    apiKey: 'c26e87bf7b044541b1552ea7b880fff3'
});

app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", "https://portal.clarifai.com/cms-assets/20180320213204/color-003.jpg").then(
    function(response) {

      // Location of the image url within the response object
      let image_url = response.outputs[0].input.data.image.url;
      console.log("The image's url is: " + image_url);

      // Location of the colours extracted from the image within the response object
      let colors = response.outputs[0].data.colors;

      // For each color, print out the raw hex code, the interpolated color - along with its name and hex code. Then print how much of the picture the colour takes up
      colors.forEach(function(color_obj) {
        
        // Step 1 - Raw hex code
        let raw_hex = color_obj.raw_hex;

        // Step 2 - Interpolated colour info
        let interpolated_color = color_obj.w3c;
        
        let interpolated_hex = interpolated_color.hex;
        let interpolated_name = interpolated_color.name;

        //Step 3 - Percentage of the image taken up by that colour
        let percentage = color_obj.value * 100;

        //Step 4 - Formatted print statement
        console.log(percentage + "%\t of the image was taken up by #" + raw_hex + ", also known as " + interpolated_name + "(" + interpolated_hex + ")");
      });
      

    },
    function(err) {
      // there was an error
      console.log(err);
    }
  );