/*
This is the script file for the options page. It handles loading the options from localStorage as well as writing them back to localStorage and the background page.
	Author: Joseph Gray
	Date Created: 10/22/2012
	Date Updated: 11/5/2012
	
	
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

// This function sets the default values for the options page. If the user has not set any options yet, the values set by this function will be used.
function default_options()
{

	// These variables hold the elements on the page that will have default values.
	var text_on = document.getElementById("text_active");
	var image_on = document.getElementById("image_active");
	var blocked_words = document.getElementById("blocked_words");
	var image_blocked_words = document.getElementById("image_blocked_words");
	var word_or_sentence = document.getElementById("word_or_sentence");
	var scanner_sensitivity = document.getElementById("scanner_sensitivity");
	var range2 = document.getElementById("range2");
	
	
	// This loop will set the text filter to on.
	for (var i = 0; i < text_on.children.length; i++)
	{		
		if (text_on.children[i].value == "true")
		{
			text_on.children[i].checked = "true";
			break;
		}
			
	}
	
	
	// This loop will set the image filter to on.
	for (var i = 0; i < image_on.children.length; i++)
	{
		
		if (image_on.children[i].value == "true")
		{
			image_on.children[i].checked = "true";
			break;
		}
		
	}
	
	// The following two lines initialize the text boxes with suggested words to block on.
	blocked_words.value = "sex\nbreast\nboob\npenis\ndick\nvagina\nfuck\ndamn\nhell\nmasturbate\nmasturbation\nhandjob\nblowjob\nfellatio\nnaked\nnude";
	
	image_blocked_words.value = "sex\nbreast\nboob\npenis\nvagina\ndick\nfuck\nmasturbate\nmasturbation\nhandjob\nblowjob\nfellatio\nnaked\nnude";
	
	
	
	//word_or_sentence.children[0].checked = 'true'; // error with this feature
	
	scanner_sensitivity.children[0].value = 50;
	range2.innerHTML = "50%";
}

// This function updates an html element to show the change in a the slider bar value for the image scanner sensitivity.
function showValue(newValue)
{

	document.getElementById("range2").innerHTML= document.getElementById("scanner_sensitivity").children[0].value + "%";
}

function load_options()
{

	// These variables hold all the elements of the page that we need to set holding the options previously chosen.
	var text_on = document.getElementById("text_active");
	var blocked_words = document.getElementById("blocked_words");
	var whitelisted_websites = document.getElementById("whitelisted_websites");
	//var replace_sentence = document.getElementById("word_or_sentence"); // error with this feature
	var block_paragraph_checkbox = document.getElementById("block_paragraph_checkbox");
	var block_webpage_checkbox = document.getElementById("block_webpage_checkbox");
	var num_for_paragraph = document.getElementById("num_for_paragraph");
	var num_for_webpage = document.getElementById("num_for_webpage");
	var image_on = document.getElementById("image_active");
	var image_blocked_words = document.getElementById("image_blocked_words");
	var image_whitelisted_websites = document.getElementById("image_whitelisted_websites");
	var image_scanner = document.getElementById("image_scanner");
	var scanner_sensitivity = document.getElementById("scanner_sensitivity");
	var range2 = document.getElementById("range2");
	var saved_note = document.getElementById("saved_note");
	
	
	if (localStorage["text_on"] == "true")
		text_on.children[0].checked = true;
		
	else
		text_on.children[1].checked = true;
		
	
	// Regardless of whether or not the text filter is on, we will load all the previously saved options so that it is easier to turn the filter back on later.
	
	// Sets the text in the blocked words box
	if (localStorage["blocked_words"])
		blocked_words.value = localStorage["blocked_words"];
	
	
	// Sets the text in the whitelisted websites box
	if (localStorage["whitelisted_websites"])
		whitelisted_websites.value = localStorage["whitelisted_websites"];
	

	
	/* // error with this feature
	// If localStorage["replace_sentence"] is true, we want to check the option to replace the sentence. (radio button)
	if (localStorage["replace_sentence"] == "true")
		replace_sentence.children[2].checked = true;
		
	else
		replace_sentence.children[0].checked = true;
	*/
	
	// Sets the block paragraph checkbox
	if (localStorage["block_paragraph"] == "true")
		block_paragraph_checkbox.checked = true;
	
	else
		block_paragraph_checkbox.checked = false;
	
	
	// Sets the block webpage checkbox
	if (localStorage["block_webpage"] == "true")
		block_webpage_checkbox.checked = true;
	
	else
		block_webpage_checkbox.checked = false;
	
	
	// Sets the textbox for the paragraph threshold
	if (localStorage["num_to_block_paragraph"])
		num_for_paragraph.value = localStorage["num_to_block_paragraph"];
	
	
	// Sets the textbox for the webpage threshold
	if (localStorage["num_to_block_webpage"])
		num_for_webpage.value = localStorage["num_to_block_webpage"];
	
	
	// Sets the radio button for the image filter on/off
	if (localStorage["image_on"] == "true")
		image_on.children[0].checked = true;
	
	else
		image_on.children[1].checked = true;
	
	
	// Populates the blocked words textbox
	if (localStorage["image_blocked_words"])
		image_blocked_words.value = localStorage["image_blocked_words"];
	
	
	// Populates the whitelisted websites box
	if (localStorage["image_whitelisted_websites"])
		image_whitelisted_websites.value = localStorage["image_whitelisted_websites"];
	
	
	// Sets the image scanner checkbox to either checked or not checked.
	if (localStorage["image_scanner"] == "true")
		image_scanner.children[0].checked = true;
		
	else
		image_scanner.children[0].checked = false;
	
	
	// Sets the image scanner sensitivity.
	scanner_sensitivity.children[0].value = localStorage["scanner_sensitivity"];
	
	range2.innerHTML = localStorage["scanner_sensitivity"] + "%";
	
	// Check if there is a saved note and that it is not empty. If so, load the note with the date/time the options were saved.
	if (localStorage["saved_note"] && localStorage["saved_note"] != "")
	{
		saved_note.innerHTML = "The last time the options were saved was: " + localStorage["month"] + "-" + localStorage["day"] + "-" + localStorage["year"] + " at " + localStorage["hour"] + ":" + localStorage["minute"] + " " + localStorage["morning"] + ". With note: " + localStorage["saved_note"];
	}
	
	// Otherwise, if there is a saved date/time, just load that. NOTE: if there is a saved note, there will be a saved date/time
	else if (localStorage["year"])
	{
		saved_note.innerHTML = "The last time the options were saved was: " + localStorage["month"] + "-" + localStorage["day"] + "-" + localStorage["year"] + " at " + localStorage["hour"] + ":" + localStorage["minute"] + " " + localStorage["morning"] + ". With no note.";
	}

}


function load_page()
{
	if (localStorage["text_on"] || localStorage["image_on"])
		load_options();
	else
		default_options();
}



// This function will prompt the user, asking if they want to make a note why they changed the settings. If they answer yes, then a prompt box will appear.
// The function will then store the date, time, and the note in localStorage so that they can be loaded. It will also change the current html of the options page
// So that the note, date/time will appear immediately.
function store_date_and_note (date)
{
	var prompt_choice = window.prompt("Do you wish to save a note explaining why you changed the settings?", "Note");
	
	var year = String(date.getFullYear());
	var month = String(date.getMonth() + 1);
	var day = String(date.getDate());
	var hour = date.getHours();
	var minute = date.getMinutes();
	var AM_or_PM = "AM";
	
	// Make sure that the hour has a '0' before single-digit minutes.
	if (minute < 10)
	{
		minute = '0' + minute;
	}
	
	// Convert 24 hour into 12 hour
	switch (hour)
	{
		case 12:
			AM_or_PM = "PM";
			break;
			
		case 13:
			hour = 1;
			AM_or_PM = "PM";
			break;
		
		case 14:
			hour = 2;
			AM_or_PM = "PM";
			break;
		
		case 15:
			hour = 3;
			AM_or_PM = "PM";
			break;
			
		case 16:
			hour = 4;
			AM_or_PM = "PM";
			break;
		
		case 17:
			hour = 5;
			AM_or_PM = "PM";
			break;
		
		case 18:
			hour = 6;
			AM_or_PM = "PM";
			break;
		
		case 19:
			hour = 7;
			AM_or_PM = "PM";
			break;
			
		case 20:
			hour = 8;
			AM_or_PM = "PM";
			break;
		
		case 21:
			hour = 9;
			AM_or_PM = "PM";
			break;
		
		case 22:
			hour = 10;
			AM_or_PM = "PM";
			break;
		
		case 23:
			hour = 11;
			AM_or_PM = "PM";
			break;
		
		case 0:
			hour = 12;
			break;
	}
	
	hour = String(hour);
		
	// If there is a note, save the note along with the date and time, and update the options page accordingly.
	if (prompt_choice != null)
	{
		localStorage["saved_note"] = prompt_choice;
		localStorage["year"] = year;
		localStorage["month"] = month;
		localStorage["day"] = day;
		localStorage["hour"] = hour;
		localStorage["minute"] = minute;
		localStorage["morning"] = AM_or_PM;
		
		document.getElementById("saved_note").innerHTML = "The last time the options were saved was: " + month + "-" + day + "-" + year + " at " + hour + ":" + minute + " " + AM_or_PM + ". With note: " + prompt_choice;

	}
	
	// Otherwise, save the date and time and update the options page accordingly.
	else
	{
		localStorage["saved_note"] = "";
		localStorage["year"] = year;
		localStorage["month"] = month;
		localStorage["day"] = day;
		localStorage["hour"] = hour;
		localStorage["minute"] = minute;
		localStorage["morning"] = AM_or_PM;
		
		document.getElementById("saved_note").innerHTML = "The last time the options were saved was: " + month + "-" + day + "-" + year + " at " + hour + ":" + minute + " " + AM_or_PM + ". With no note.";
		
	}
}

function save_and_update_background()
{

	// This variable holds the options object in the background page for easy access.
	var background = chrome.extension.getBackgroundPage().options;
	
	
	// These variables hold all the options chosen.
	// This is a boolean value that tells if the text filter is on/off.
	var text_on = document.getElementById("text_active").children[0].checked;
	
	// This is a string value that holds all the blocked words.
	var blocked_words = document.getElementById("blocked_words").value;
	
	// This is a string value that holds all the whitelisted websites.
	var whitelisted_websites = document.getElementById("whitelisted_websites").value;
		
	// This is a boolean value. It is true if the user wants to replace the entire sentence containing a blocked word, and false otherwise.
//	var replace_sentence = document.getElementById("word_or_sentence").children[2].checked; // error with this feature
	
	// This is a boolean value. True means the user wants to block a paragraph after a specified number of blocked words.
	var block_paragraph_checkbox = document.getElementById("block_paragraph_checkbox").checked;
	
	// This is a boolean value. True means the user wants to block the webpage after a specified number of blocked words.
	var block_webpage_checkbox = document.getElementById("block_webpage_checkbox").checked;
	
	// This is an integer. It gives the threshold for blocking a paragraph. If the user did not give a number, this will have the value NaN.
	var num_for_paragraph = parseInt(document.getElementById("num_for_paragraph").value);
	
	// This is an integer. It gives the threshold for blocking a webpage.
	var num_for_webpage = parseInt(document.getElementById("num_for_webpage").value);
	
	// This is a boolean. True means the image filter is on.
	var image_on = document.getElementById("image_active").children[0].checked;
	
	// This is a string. It contains all the words used to block images.
	var image_blocked_words = document.getElementById("image_blocked_words").value;
	
	// This is a string. It contains the list of whitelisted websites.
	var image_whitelisted_websites = document.getElementById("image_whitelisted_websites").value;
	
	// This is a boolean. True means the image scanner is on.
	var image_scanner = document.getElementById("image_scanner").children[0].checked;
	
	// This is an integer between 0 and 100. It tells the sensitivity of the image scanner as a percentage.
	var scanner_sensitivity = document.getElementById("scanner_sensitivity").children[0].value;
	
	// This element holds the time that the save button was clicked.
	var time = new Date();
	
	
	// Calls the function that stores the date/time as well as updates the page.
	store_date_and_note(time);
	
	
	
	// Sets the text filter on/off
	localStorage["text_on"] = text_on;
	background.text_on = text_on;
	
	// Store the blocked words string.
	localStorage["blocked_words"] = blocked_words;
	background.blocked_words = blocked_words;
	
	// Store the whitelisted websites string.
	localStorage["whitelisted_websites"] = whitelisted_websites;
	background.whitelisted_websites = whitelisted_websites;
	
	// Store the option to block word or sentence as a boolean.
//	localStorage["replace_sentence"] = replace_sentence; // error with this feature
//	background.replace_sentence = replace_sentence; // error with this feature
		
	// Store the option to block the paragraph as a boolean.
	localStorage["block_paragraph"] = block_paragraph_checkbox;
	background.block_paragraph = block_paragraph_checkbox;
	
	if (block_paragraph_checkbox)
	{			
		// If we are going to block the paragraph, store the number of words after which we will block it. It will be stored as an integer.
		// We have to make sure that a value was entered into the box. If no value was entered (NaN or not a number) then assign a value of '1'.
		if (isNaN(num_for_paragraph))
		{			
			localStorage["num_to_block_paragraph"] = 1;
			background.num_for_paragraph = 1;
		}
		else
		{
			// We have to make sure that a positive number is entered. If a negative number is entered, then assume that the positive of that number was intended.
			// To do this, we simply store the absolute value of whatever number they used.
			localStorage["num_to_block_paragraph"] = Math.abs(num_for_paragraph);
			background.num_for_paragraph = Math.abs(num_for_paragraph);
		}
	}
	
	
	// Store the option to block the webpage as a boolean.
	localStorage["block_webpage"] = block_webpage_checkbox;
	background.block_webpage = block_webpage_checkbox;
	
	// If we are going to block the webpage, store the number of words after which we will block it. It will be stored as a string.
	if (block_webpage_checkbox)
	{
		// If we are going to block the webpage, store the number of words after which we will block it. It will be stored as an integer.
		// We have to make sure that a value was entered into the box. If no value was entered (NaN or not a number) then assign a value of '1'.
		if (isNaN(num_for_webpage))
		{
			localStorage["num_to_block_webpage"] = 1;
			background.num_for_webpage = 1;
		}
		
		else
		{
			localStorage["num_to_block_webpage"] = Math.abs(num_for_webpage);
			background.num_for_webpage = Math.abs(num_for_webpage);
		}
	}
	
	
	
	
	
	// Stores the option for turing the image filter on/off
	localStorage["image_on"] = image_on;
	background.image_on = image_on;
	
	
	// Store the blocked words.
	localStorage["image_blocked_words"] = image_blocked_words;
	background.image_blocked_words  = image_blocked_words;
	
	// Store the whitelisted websites.
	localStorage["image_whitelisted_websites"] = image_whitelisted_websites;
	background.image_whitelisted_websites = image_whitelisted_websites;
	
	// Store if the scanner is on.
	localStorage["image_scanner"] = image_scanner;
	background.image_scanner = image_scanner;
	
	// Store the scanner sensitivity
	localStorage["scanner_sensitivity"] = scanner_sensitivity;
	background.scanner_sensitivity = scanner_sensitivity;

}






function save_button()
{
	var choice = window.confirm("Are you sure you want to save?");
	
	if (choice == true)
	{
		save_and_update_background();
	}
}

// These are the event handlers for the options page.

// This event is when the slider bar is changed. It will update the html value of the number that shows the value of the slider bar.
document.getElementById("scanner_sensitivity").children[0].addEventListener('change', showValue);

// This event will load the options, populating all the fields, and checking the appropriate radio/checkbox buttons.
document.addEventListener('DOMContentLoaded', load_page);

// This event handles what happens when the save button is clicked.
document.getElementById("save_button").children[0].addEventListener('click', save_button);
