#Twitterblocker, aka "shush!"
##a Google Chrome Extension
==============
###Project Overview

Twitterblocker is a Google Chrome Extension that allows users to set words / phrases that will cause any Tweet with that text to be hidden non-destructively.

I completed this originally as a final project done as part of MakerSquare's accelerated learning program in web app development. 

#### Currently live under the name "shush!" at the [Google Web Store](https://chrome.google.com/webstore/detail/shush/bkphldojjhhknjgafgpgahebiefkogog)   
---
###Tech Stack

Built with:
* JavaScript / jQuery
* HTML / CSS
* chrome.extension.* API

With special thanks to Mutation Observers.
___

###Learning goals

* Learn the architecture of a Chrome Extension
    - 
* Practice an entirely JavaScript process
* Learn new technologies for persistence and event handling
* Gain more practice of modular design and clear comments


### Minimum Viable Product goals / User Stories

A User can

* add words to the blocked list;
* remove words from the blocked list, individually or in bulk;
* engage "shush!" to block Tweets with those words;
* refresh "shush!" to show previously hidden Tweets.

___
### Extended features

A User can

* retain blocked word list between visits;
* hide Tweets on load from previously saved blocked list;
* peek at hidden Tweets (on hover) or dismiss spoiler block on individual Tweet;
* load more Tweets (both new Tweets and old Tweets loaded by scrolling) that are automatically processed by "shush!"

___

### Future additions

* Further styling (perhaps with "redacted" theme);
* figure out related-terms to blocked list;
* abstract main logic to other social media, e.g., Facebook.
