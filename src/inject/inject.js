// 'use strict';

// // sendMessage to set icon on page
// chrome.runtime.sendMessage({}, function() {});

// // chrome.extension.sendMessage({}, function(response) {
// // 	var readyStateCheckInterval = setInterval(function() {
// // 	if (document.readyState === "complete") {
// // 		clearInterval(readyStateCheckInterval);

// // 		// ----------------------------------------------------------
// // 		// This part of the script triggers when page is done loading
// // 		console.log("Hello. This message was sent from scripts/inject.js");
// // 		// ----------------------------------------------------------

// // 	}
// // 	}, 10);
// // });

// // 
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
// 	var tweets = $('li.js-stream-item');

// 	(function(){
// 		for (var i = 0; i < tweets.length; i++) {
// 			if ($(tweets[i]).find('.tweet-text').text().indexOf(request.text) !== -1) {
// 				$(tweets[i]).find($('.tweet-text')).prev().after("<a class='spoiler-revealer'>Hover to reveal<br>Click to dismiss</a>");
// 				$(tweets[i]).find($('.tweet-text')).hide();
// 				$(tweets[i]).find($('.js-media-container')).hide();
// 			}
//     }
// 	})();

// $('.spoiler-revealer').hover(function() {
// 	$($(this).parent()).find($('.tweet-text')).fadeIn( 200 );
// 	$($(this).parent()).find($('.js-media-container')).fadeIn( 200 );
// 	}, 
// 	function() {
// 		$($(this).parent()).find($('.tweet-text')).fadeOut( 200 );
// 		$($(this).parent()).find($('.js-media-container')).fadeOut( 200 );
// 	}
// );

// $('.spoiler-revealer').on('click', function() {
// 	$($(this).parent()).find($('.tweet-text')).show();
// 	$($(this).parent()).find($('.js-media-container')).show();
// 	$(this).remove();
// });

// 		// check for spoiler
// 		// $(tweet).find($('.tweet-text')).parent.append("<p class='spoiler-revealer'>Click to reveal potential spoiler</p>")
// 		// $(tweet).find($('.tweet-text')).prev().after("<p class='spoiler-revealer'>Click to reveal potential spoiler</p>")
		

// 	// alert($(tweets[0]).find('.tweet-text').text());



  



// // $('ol.stream-items').children()
// // $('#stream-item-tweet-520643107348840449').find($('p.tweet-text')).text()
// // holder = $.map($('.js-stream-item'), function(x) { return parseInt(x.id.split('-')[3]) });


// // $($('li.js-stream-item')[0]).find('.tweet-text').hide()


// // $(tweets[0]).find('.tweet-text').text()


// // for (tweet in tweets) {
// // 	// check for spoiler
// // 	$(tweet).find($('.tweet-text')).parent.append("<p class='spoiler-revealer'>Click to reveal potential spoiler</p>")
// // 	$(tweet).find($('.tweet-text')).prev().after("<p class='spoiler-revealer'>Click to reveal potential spoiler</p>")
// // 	$(tweet).find($('.tweet-text')).hide()
// // 	$(tweet).find($('.js-media-container')).hide()
// // }

// // $( document ).on( "click", "spoiler-revealer", function() {
// //   console.log($( this ));
// // });

// // $('p.spoiler-revealer').on( "click", function() {
// //   console.log("hello");
// // });


// // var ApplicationController = {
// // 	attachListeners: function() {
// // 		$(document).on('click', '.spoiler-revealer', function(e) {
// // 			e.preventDefault();
// // 			console.log("1");
// // 			console.log(e);
// // 			console.log("2");
// // 			console.log(event);
// // 			console.log("3");
// // 			console.log(this);
// // 			// $(e.target).find($('.spoiler-revealer')).remove();
// // 			// $(e.target).find($('.tweet-text')).show();
// // 			// $(e.target).find($('.js-media-container')).show();
// // 		});
// // 	}
// // };
// // ApplicationController.attachListeners();

// //if anchor on('click', function(){
// //
// //});


//   sendResponse();
// });





// // alert("Code Executed ... Inject");

// // chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
// //   console.log(sender.tab ?
// //               "from a content script:" + sender.tab.url :
// //               "from the extension");
// //   if (request.greeting == "hello") {
// //     sendResponse({farewell: "goodbye"});
// //   }
// // });