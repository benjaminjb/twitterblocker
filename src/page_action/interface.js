'use strict';

// // // // // // // // // // // // // // // //
// Add click handlers to interface.html DOM
// // // // // // // // // // // // // // // //

$(document).on('ready', function() {

	$('.addWordButton').on('click', function(){
	  var text = $('.blockedWord').val();
	  if(text.length) {
	    addNewNode(text);
	  }
	  $('.blockedWord').val('');
	});
	
	$('.blockedWordList').on('click', '.remove-button', function(){
		$(this).parent().remove();
	});

	$('.clear-blocked-list-button').on('click', function() {
		$('.blockedWordList').empty();
	});

	$('.engage-blocked-list-button').on('click', function() {
		engageBlockedListWords();
	});
});

// // // // // // // // // // // // // // // //
// Chrome Extension Storage-related functions
// // // // // // // // // // // // // // // //

// Variable for easy storage retrieval/setting ; can change all storage to local if necessary
var storage = chrome.storage.sync;

// Function to retrieve blocked word list from memory and to add them to interface.html
function getBlockedWordsAndAddToPage() {
	storage.get('banned', function(blockedWords) {
		for (var index = 0; index < blockedWords.banned.length; index++) {
			addNewNode(blockedWords.banned[index]);
		}
	});
}

// Adds each word in memory to interface.html, complete with remove button
function addNewNode(textAdd) {
	var text = '<li><button class="remove-button">x</button><span class="editable">' + textAdd + '</span></li>';
  $(text).appendTo('.blockedWordList');
}

// Retrieves words from interface blocked word list--and removes all old words from storage
// Sends the new blocked word list to the content script to alter the DOM of Twitter
// Saves the new blocked word list to storage with helper method
function engageBlockedListWords () {
	var blockedWordArray = $('.editable').map(function() { return $(this).text() }).get();
	storage.remove('banned', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  	chrome.tabs.sendMessage(tabs[0].id, {text: blockedWordArray}, function() {
				saveBlocked(blockedWordArray);
	  	});
		});
	});
}

// Saves the blocked word list to memory as an array
function saveBlocked(text) {
	var blocked = [];
	for (var index = 0; index < text.length; index++) {
		blocked.push(text[index]);
	}
	storage.set({'banned': blocked}, function() {});
}

// // // // // // // // // // // // // // // //
// Run functions to prepare page
// // // // // // // // // // // // // // // //

getBlockedWordsAndAddToPage();