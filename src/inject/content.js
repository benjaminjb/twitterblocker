'use strict';

var storage = chrome.storage.sync;

// Send message to background page to show page icon
// This message only runs when this content script runs--only on Twitter and Twitter-related pages
chrome.runtime.sendMessage({}, function() {});

// Respond to messages from background page;
// the request object will include what's entered in from the the omnibox
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

	// Enters the banned words into the extension storage
	saveBlocked(request.text);

	alert("storage alert ", storage.get("banned"));
	
	// Grabs the visible tweets
	// var tweets = $('li.js-stream-item');

	// (function(){
	// 	for (var i = 0; i < tweets.length; i++) {
	// 		if ($(tweets[i]).find('.tweet-text').text().indexOf(request.text) !== -1) {
	// 			$(tweets[i]).find($('.tweet-text')).prev().after("<a class='spoiler-revealer'>Tweet related to <strong>"+request.text+"</strong> hidden. Hover to reveal or click to dismiss</a>");
	// 			$(tweets[i]).find($('.tweet-text')).hide();
	// 			$(tweets[i]).find($('.js-media-container')).hide();
	// 		}
 //    }
	// })();

	alert("after storage");

	sendResponse();
});

function saveBlocked(text) {

	alert("before blocked");
	storage.get('banned', function(blockedWords) {
		var blocked = blockedWords.banned; 
		blocked.push(text);
		console.dir(blocked);
		storage.set({'banned': blocked}, function() {
 	 		alert('Settings saved'); 
 	 		 	storage.get('banned', function(blockedWords) {
				console.dir(blockedWords); 
				var blocked = blockedWords.banned;
				console.dir(blocked);
			});
  	});
 	});
  // storage.get('banned', function(blockedWords) {
 	//  	alert("second "+blockedWords.banned +" "+ typeof blockedWords.banned);
 	// });
	// storage.get('banned', function(blockedWords) {

		// if (blockedWords == null) {
		// 	alert("woops");
		// 	return;
		// }
		// var blocked = blockedWords || [] ;
		// blocked.push(text);
		// alert("blocked");
	 //  alert(blocked);
  // }); 
  	
	  
	alert("after blocked");
		// 
		// alert(blocked);
		// alert("after push");
		// storage.set({'banned': blocked}, function() {
	 //    alert('Settings saved');
	 //  });
  // })();	
}

// function loadChanges() {
//   storage.get('banned', function(items) {
//     // To avoid checking items.css we could specify storage.get({css: ''}) to
//     // return a default value of '' if there is no css value yet.
//     if (items.css) {
//       textarea.value = items.css;
//       message('Loaded saved CSS.');
//     }
//   });
// }

// chrome.storage.sync.set({mykey: 10}, function (mykey) {
// chrome.storage.sync.get(mykey, function(result) {
// console.log("data", result)
// }
// )
// }
// )
	


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