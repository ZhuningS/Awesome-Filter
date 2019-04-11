Image-Moderation
=========

Image API to categorize image url as adult, teen or everyone using the FREE automated image moderation API at https://moderatecontent.com

* Image Types: .jpg .png .bmp .gif
* Max image size: 10 MB
* Protocol: HTTP | HTTPS
* Animated Gif Support 

## Installation

  npm install image-moderation --save

## Usage

	var image_moderation = require('image-moderation');

	image_moderation.evaluate("https://www.moderatecontent.com/img/sample_faces.jpg")
	.then((response) => {
		var json = JSON.parse(response);
		console.log(json);
	});

	image_moderation.is_adult("https://www.moderatecontent.com/img/sample_faces.jpg")
	.then((response) => {
		console.log("Does this image have adult content (true | false)? " + response);
	});

## Full Documentation

<https://moderatecontent.com/documentation/>

## Response JSON

    {
        "url_classified": "https://www.moderatecontent.com/img/sample_faces.jpg",
        "rating_index": 1,
        "rating_letter": "e",
        "predictions": {
            "teen": 4.9053038160006,
            "everyone": 92.642044275999,
            "adult": 2.4526519080003
        },
        "rating_label": "everyone",
        "error_code": 0,
        "frame": 1
    }

## Tests

`npm test`

## Release History

* 1.0.5 Improved documentation
* 1.0.4 Improved testing
* 1.0.3 Updated README.md
* 1.0.2 Added tests
* 1.0.1 Fixed header
* 1.0.0 Initial release