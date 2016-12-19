#Twitterblocker, aka "shush!" 
## as seen on someone's twitter feed
###a Google Chrome Extension
==============
###Project Overview

Twitterblocker is a Google Chrome Extension that allows users to set words / phrases that will cause any tweet with that text to be hidden non-destructively.

I completed this originally as a final project done as part of MakerSquare's accelerated learning program in web app development. 

#### Currently live under the name "shush!" at the [Google Web Store](https://chrome.google.com/webstore/detail/shush/bkphldojjhhknjgafgpgahebiefkogog)   
___
###Tech Stack

Built with:
* JavaScript and jQuery
* HTML and CSS
* chrome.extension.* API

With special thanks to Mutation Observers.
___

### Learning goals

* Learn the architecture of a Chrome Extension
* Practice an entirely JavaScript process
* Learn new technologies for persistence and event handling
* Gain more practice of modular design and clear comments

___
### User Stories for Minimum Viable Product

A User can

* add words to the blocked list;
* remove words from the blocked list, individually or in bulk;
* engage "shush!" to block tweets with those words;
* refresh "shush!" to show previously hidden tweets.

___
### Extended features

A User can

* retain blocked words list between visits (and between computers);
* hide tweets on load from previously saved blocked list;
* peek at hidden tweets (on hover) or dismiss spoiler block on individual tweet (by clicking);
* automatically process tweets on load (both in-coming tweets and tweets loaded by scrolling).

___

### Future Additions

Possible extensions:

* further styling (perhaps with "redacted" theme);
* figure out related-terms to blocked list, possibly with web-scraping;
* abstract main logic to other social media, e.g., Facebook;
* reverse logic so that "shush!" shows only those tweets that include some word(s) and/or phrase(s) and hides all others (a "focus" mode);
* write clearer instructions on popup window.
