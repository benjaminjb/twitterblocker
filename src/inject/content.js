'use strict';

// // // // // // // // // // // // // // // //
// Utility variables
// // // // // // // // // // // // // // // //

// Variable allows for quick reassignment of chrome.storage
var storage = chrome.storage.sync;

// // // // // // // // // // // // // // // //
// Message senders and listeners
// // // // // // // // // // // // // // // //

// Tells background.js to set the page icon
// Runs saved blocked list on load
chrome.runtime.sendMessage({}, function(response) {
	storage.get('banned', function(blockedWords) {
		var tweets = $('li.js-stream-item');
		runBlockedWords(tweets, blockedWords.banned);
	});
});

// Recieves message from interface.js with new list of words to block as request.text
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	resetHiddenTweets();
	var tweets = $('li.js-stream-item');
	runBlockedWords(tweets, request.text);
	sendResponse();
});

// // // // // // // // // // // // // // // //
// Main logic
// // // // // // // // // // // // // // // //

// Shows all previously hidden tweets
function resetHiddenTweets() {
	var hidden = $('.spoiler-revealer');
	for (var i = 0; i < hidden.length; i++) {
		hidden[i].click();
	}
}

// Hides any currently visible tweets that match any of the words
function runBlockedWords(tweets, words) {
	
	(function(){
		for (var i = 0; i < tweets.length; i++) {
			for (var j = 0; j < words.length; j++) {
				if ($(tweets[i]).find('.tweet-text').text().indexOf(words[j]) !== -1) {
					$(tweets[i]).find($('.tweet-text')).prev().after("<a class='spoiler-revealer'>Tweet related to <strong>"+words[j]+"</strong> hidden. Hover to reveal or click to dismiss</a>");
					$(tweets[i]).find($('.tweet-text')).hide();
					$(tweets[i]).find($('.js-media-container')).hide();
				}
			}
    }
	})();
	addEventListeners();
}

// // // // // // // // // // // // // // // //
// Mutation observer set-up
// // // // // // // // // // // // // // // //

// var insertedNodes = [];

var observer = new MutationObserver(function(mutations) {
 	mutations.forEach(function(mutation) {
		storage.get('banned', function(blockedWords) {
			runBlockedWords(mutation.addedNodes, blockedWords.banned);
		});
	})
});

observer.observe(document.querySelector('.js-navigable-stream'), { childList: true });

// // // // // // // // // // // // // // // //
// Utility functions
// // // // // // // // // // // // // // // //

function addEventListeners() {
	$('.spoiler-revealer').hover(function() {
		$($(this).parent()).find($('.tweet-text')).fadeIn( 200 );
		$($(this).parent()).find($('.js-media-container')).fadeIn( 200 );
		}, 
		function() {
			$($(this).parent()).find($('.tweet-text')).fadeOut( 200 );
			$($(this).parent()).find($('.js-media-container')).fadeOut( 200 );
		}
	);

	$('.spoiler-revealer').on('click', function() {
		$($(this).parent()).find($('.tweet-text')).show();
		$($(this).parent()).find($('.js-media-container')).show();
		$(this).remove();
	});
}