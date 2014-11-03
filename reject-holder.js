************//background.js

// Reset the tweets
// chrome.pageAction.onClicked.addListener(function(tabs) {
// 	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   	chrome.tabs.sendMessage(tabs[0].id, {text: null}, function() {});
//   });
// });

//////////////////////////////////////////////////
// Allow user to enter terms to block into omnibox
//////////////////////////////////////////////////

// // Provide helpful suggestion on use of omnibox
// chrome.omnibox.setDefaultSuggestion({description: 'Enter word or phrase to block'});

// // Fire event when the user accepts the input in the omnibox
// // Event finds tab and sends message to tab's associated content script
// chrome.omnibox.onInputEntered.addListener(function(text) {
// 	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// 	  chrome.tabs.sendMessage(tabs[0].id, {text: text}, function() {});
// 	});
// });

// chrome.pageAction.onClicked.addListener(function(tab) {
//   var url = chrome.extension.getURL('options.html');
//   chrome.tabs.create({selected:true, url:url});  
// });


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

*************//content.js

// var getBlockedWords = new Promise(function(resolve, reject) {
// 	storage.get('banned', function(blockedWords) {
// 		resolve(blockedWords.banned)
//   log.insertAdjacentHTML('beforeend', thisPromiseCount + 
//           ') Promise started (<small>Async code started</small>)<br/>');
//       // This only is an example to create asynchronism
//       window.setTimeout(
//         function() {
//           // We fulfill the promise !
//           resolve(thisPromiseCount)
//         }, Math.random() * 2000 + 1000);
//     });

//   // We define what to do when the promise is fulfilled
//   p1.then(
//     // Just log the message and a value
//     function(val) {
//       log.insertAdjacentHTML('beforeend', val +
//           ') Promise fulfilled (<small>Async code terminated</small>)<br/>');
//     });

// A function and a variable to get all the blocked words that are currently in memory.
// var blockedWords;

// function getBlockedWords() {
// 	storage.get('banned', function(blockedWords) {
// 		blockedWords = blockedWords.banned;
// 	});
// }

// getBlockedWords();



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
	



