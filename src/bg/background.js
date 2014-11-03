'use strict';

// // // // // // // // // // // // // // // //
// Page icon processes
// // // // // // // // // // // // // // // //

// Add icon to search bar if on Twitter by listening to message from content script
// Content script only fires if on Twitter (see manifest.json for content scripts)
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  chrome.pageAction.show(sender.tab.id);
  sendResponse();
});