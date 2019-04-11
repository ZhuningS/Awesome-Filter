/*
This is the background page for the extension. It's primary purpose is to hold the options selected in memory to enable quick access to them. It will also communicate with the content script.
This script will also contain the code called when buttons are clicked in the options page.

Author: Joseph Gray
Date Created: 11/2/2012
Date Modified: 2/2/2013



	   Copyright 2013 Joseph Gray

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

// The background page is reloaded each time the extension is enabled after being disabled (the background page unloads when disabled).
// Therefore, I can use the background page to track when the extension is enabled by running a function each time the extension is enabled.
// However, the background page will also re-load when chrome is started, and stops when chrome exits. So we need to figure that out.
// If the background page can access see what other processes are running, then it will be able to tell when the browser just started?


// This initializes localStorage when the extension is installed.

function initialize_options()
{
	if (localStorage.getItem("install_date"))
		return;
	
	localStorage["install_date"] = new Date().getTime();
	localStorage["text_on"] = true;
	localStorage["blocked_words"] = "sex\nbreast\nboob\npenis\ndick\nvagina\nfuck\ndamn\nhell\nmasturbate\nmasturbation\nhandjob\nblowjob\nfellatio\nnaked\nnude";
	localStorage["whitelisted_websites"] = "";
	localStorage["replace_sentence"] = false;
	localStorage["block_paragraph"] = false;
	localStorage["block_webpage"] = false;
	localStorage["image_on"] = true;
	localStorage["image_blocked_words"] = "sex\nbreast\nboob\npenis\nvagina\ndick\nfuck\nmasturbate\nmasturbation\nhandjob\nblowjob\nfellatio\nnaked\nnude\nbra \npanties\nrisque\nraunch\nmaxim\nplayboy\nstripper\nprostitute\nlingerie";
	localStorage["image_whitelisted_websites"]  = "";
	localStorage["scanner_sensitivity"] = 50;

	
}

initialize_options();

// Will need to load the variables upon the first check from the content script. This will be done by checking to see if text_on is null. If it is, the background script will execute a function that will
// load the options from localStorage. If text_on is not null, that means the options have already been loaded and they will be used.


/*
This funtion takes in the options object which is declared below. It then reads in the options in localStorage and sets the options in the options object accordingly.
*/
function load_variables(options)
{
	
	// All the following are in if statements to ensure that the option actually exists in localStorage. For example, if someone never turned on the block paragraph option, then that option wouldn't exist in localStorage
	// and would throw an error if we tried to read from it. We then need another if statement for all the boolean values so that we get a boolean value and not the string that is returned by localStorage.
	
	// Sets the text filter option
	if (localStorage["text_on"])
	{
		if (localStorage["text_on"] == "true")
		{
			options.text_on = true;
		}
		else
		{
			options.text_on = false;
		}
	}
	
	// Sets the blocked words list
	if (localStorage["blocked_words"])
		options.blocked_words = localStorage["blocked_words"];
	
	// Sets the whitelisted websites list
	if (localStorage["whitelisted_websites"])
		options.whitelisted_websites = localStorage["whitelisted_websites"];
	
	// Sets the replace sentence options
	if (localStorage["replace_sentence"])
	{
		if (localStorage["replace_sentence"] == "true")
		{
			options.replace_sentence = true;
		}
		else
		{
			options.replace_sentence = false;
		}
	}
		
	// Sets the block paragraph option
	if (localStorage["block_paragraph"])
	{
		if (localStorage["block_paragraph"] == "true")
		{
			options.block_paragraph = true;
		}
		else
		{
			options.block_paragraph = false;
		}
	}
	
	// Sets the block webpage option
	if (localStorage["block_webpage"])
	{
		if (localStorage["block_webpage"] == "true")
		{
			options.block_webpage = true;
		}
		else
		{
			options.block_webpage = false;
		}
	}
	
	
	// Sets the threshold for blocking a paragraph
	if (localStorage["num_to_block_paragraph"])
		options.num_for_paragraph = localStorage["num_to_block_paragraph"];
	
	// Sets the threshold for blocking a webpage
	if (localStorage["num_to_block_webpage"])
		options.num_for_webpage = localStorage["num_to_block_webpage"];
	
	// Sets the image filter option
	if (localStorage["image_on"])
	{
		if (localStorage["image_on"] == "true")
		{
			options.image_on = true;
		}
		else
		{
			options.image_on = false;
		}
	}
	
	// Sets the list of words to block images on
	if (localStorage["image_blocked_words"])
		options.image_blocked_words = localStorage["image_blocked_words"];
	
	// Sets the whitelisted websites for the image filter
	if (localStorage["image_whitelisted_websites"])
		options.image_whitelisted_websites = localStorage["image_whitelisted_websites"];
	
	// Sets the image scanner option
	if (localStorage["image_scanner"])
	{
		if (localStorage["image_scanner"] == "true")
		{
			options.image_scanner = true;
		}
		else
		{
			options.image_scanner = false;
		}
	}
	
	// Sets the sensitivity of the image scanner
	if (localStorage["scanner_sensitivity"])
		options.scanner_sensitivity = localStorage["scanner_sensitivity"];

}

// This is an object that holds all the options available for the user to set.
var options = new Object();

// This is a boolean value that tells if the text filter is on/off.
options.text_on = null;

// This is a string value that holds all the blocked words.
options.blocked_words = null;

// This is a string value that holds all the whitelisted websites.
options.whitelisted_websites = null;

// This is a boolean value. It is true if the user wants to replace the entire sentence containing a blocked word, and false otherwise.
options.replace_sentence = null;

// This is a boolean value. True means the user wants to block a paragraph after a specified number of blocked words.
options.block_paragraph = null;

// This is a boolean value. True means the user wants to block the webpage after a specified number of blocked words.
options.block_webpage = null;

// This is an integer. It gives the threshold for blocking a paragraph. If the user did not give a number, this will have the value NaN.
options.num_for_paragraph = null;

// This is an integer. It gives the threshold for blocking a webpage.
options.num_for_webpage = null;

// This is a boolean. True means the image filter is on.
options.image_on = null;

// This is a string. It contains all the words used to block images.
options.image_blocked_words = null;

// This is a string. It contains the list of whitelisted websites.
options.image_whitelisted_websites = null;

// This is a boolean. True means the image scanner is on.
options.image_scanner = null;

// This is an integer between 0 and 100. It tells the sensitivity of the image scanner as a percentage.
options.scanner_sensitivity = null;


// Function to pass options object to content script.
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {

    if (request.greeting == "request_options")
	{
		//window.alert("Get options message recieved."); // used for testing.
		if (options.text_on == null)
		{
			//window.alert("Loading variables from localStorage."); // used for testing.  Test Case 002
			
			load_variables(options);
			
			// line below used for testing in Test Cases 002
			//window.alert("Options object after variable load: " + "\ntext_on " + options.text_on + "\n" + "blocked_words " + options.blocked_words + "\n" + "whitelisted_websites " + options.whitelisted_websites + '\n' + "replace_sentence " + options.replace_sentence + '\n' + "block_paragraph " + options.block_paragraph + '\n' + "block_webpage " + options.block_webpage + '\n' + "num_paragraph " + options.num_for_paragraph + '\n'+ "num_webpage " + options.num_for_webpage + '\n' + "image_on " + options.image_on + '\n' + "image_blocked_words " + options.image_blocked_words + '\n' + "image_whitelist " + options.image_whitelisted_websites + '\n'+ "image_scanner " + options.image_scanner + '\n' + "scanner_sensitivity " + options.scanner_sensitivity);  //Used for testing.
			
		}
		
		//window.alert("No need for loading options object."); // Used for testing. Test Case 002. same for line below
		//window.alert("Options object: " + "\ntext_on " + options.text_on + "\n" + "blocked_words " + options.blocked_words + "\n" + "whitelisted_websites " + options.whitelisted_websites + '\n' + "replace_sentence " + options.replace_sentence + '\n' + "block_paragraph " + options.block_paragraph + '\n' + "block_webpage " + options.block_webpage + '\n' + "num_paragraph " + options.num_for_paragraph + '\n'+ "num_webpage " + options.num_for_webpage + '\n' + "image_on " + options.image_on + '\n' + "image_blocked_words " + options.image_blocked_words + '\n' + "image_whitelist " + options.image_whitelisted_websites + '\n'+ "image_scanner " + options.image_scanner + '\n' + "scanner_sensitivity " + options.scanner_sensitivity);  //Used for testing.

		sendResponse({farewell: options});
	}
	

  });
