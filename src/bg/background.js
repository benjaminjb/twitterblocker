'use strict';

// ?????????????
chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

// Add icon to search bar if on Twitter by listening to message from content script
// Content script only fires if on Twitter (see manifest.json for content_scripts)
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  chrome.pageAction.show(sender.tab.id);
});

//////////////////////////////////////////////////
// Allow user to enter terms to block into omnibox
//////////////////////////////////////////////////

// Provide helpful suggestion on use of omnibox
chrome.omnibox.setDefaultSuggestion({description: 'Enter word or phrase to block'});

// Fire event when the user accepts the input in the omnibox
// Event finds tab and sends message to tab's associated content script
chrome.omnibox.onInputEntered.addListener(function(text) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, {text: text}, function() {});
	});
});

chrome.pageAction.onClicked.addListener(function(tab) {
  var url = chrome.extension.getURL('options.html');
  chrome.tabs.create({selected:true, url:url});  
});


// // Possible use for icon to be clicked
// // chrome.pageAction.onClicked.addListener(function(tab) {
// //   var url = chrome.extension.getURL('options.html');
// //   chrome.tabs.create({selected:true, url:url});  
// // });

// // Omnibox entry for terms to be blocked  
// // chrome.omnibox.onInputEntered.addListener(function(text) {
// //   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// //   chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
// //     console.log(response.farewell);
// //   });
// // });


// //   executeScript(tab.id, {
// //     "file": "contentscript.js",
// //     "text": text
// //   // }, function () {
// // 		// console.log("Script Executed .. "); // Notification on Completion
// //   });
// // });

// // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// //   chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
// //     console.log(response.farewell);
// //   });
// // });



// // chrome.tabs.onUpdated.addListener(function (tabId) {
// //   chrome.pageAction.show(tabId);
// // });


// // document.addEventListener("scroll", buzzkill);

// // chrome.pageAction.onClicked.addListener(function callback)


// // chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
// // 	console.log(tab.url);
// //     // if (tab.url && tab.url.indexOf('http://soiduplaan.tallinn.ee/') === 0) {
// //     //     chrome.pageAction.show(tabId);
// //     // }
// // });

// // chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
// //   chrome.pageAction.show(sender.tab.id);
// // });
