'use strict';

var chai = require("chai");
var expect = require('chai').expect;
var image_moderation = require('../index.js');

describe('#image-moderation', function() {
	this.timeout(15000);

    it('evaluate image url and return rating_index = 1', function() {
    	return image_moderation.evaluate("https://www.moderatecontent.com/img/sample_faces.jpg")
    		.then((response)=>{
    			var json = JSON.parse(response);
    			// console.log(json);
    			return expect(json.rating_index).to.equal(1);
    		});
    });

    it('evaluate image url is_adult as false', function() {
    	return image_moderation.is_adult("https://www.moderatecontent.com/img/sample_faces.jpg")
    		.then((response)=>{
    			return expect(response).to.equal(false);
    		});
    });

    it('evaluate image url that doesn\'t exist and return error', function() {
        return image_moderation.evaluate("https://www.moderatecontent.com/img/image_does_not_exist.jpg")
            .then((response)=>{
                var json = JSON.parse(response);
                // console.log(json.error);
                return expect(json.error).to.equal("Url not accessible or malformed image");
            });
    });

    it('evaluate image url that is blank and return error', function() {
        return image_moderation.evaluate("")
            .then((response)=>{
                var json = JSON.parse(response);
                // console.log(json.error);
                return expect(json.error).to.equal("The url you have (GET|POST) is malformed");
            });
    });
});