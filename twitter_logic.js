

$('ol.stream-items').children()
$('#stream-item-tweet-520643107348840449').find($('p.tweet-text')).text()
holder = $.map($('.js-stream-item'), function(x) { return parseInt(x.id.split('-')[3]) });


$($('li.js-stream-item')[0]).find('.tweet-text').hide()


$(tweets[0]).find('.tweet-text').text()

var tweets = $('li.js-stream-item')
for (tweet in tweets) {
	// check for spoiler
	$(tweet).find($('.tweet-text')).parent.append("<p class='spoiler-revealer'>Click to reveal potential spoiler</p>")
	$(tweet).find($('.tweet-text')).prev().after("<p class='spoiler-revealer'>Click to reveal potential spoiler</p>")
	$(tweet).find($('.tweet-text')).hide()
	$(tweet).find($('.js-media-container')).hide()
}

$( document ).on( "click", "spoiler-revealer", function() {
  console.log($( this ));
});

$('p.spoiler-revealer').on( "click", function() {
  console.log("hello");
});


var ApplicationController = {
	attachListeners: function() {
		$(document).on('click', '.spoiler-revealer', function(e) {
			e.preventDefault();
			console.log("1");
			console.log(e);
			console.log("2");
			console.log(event);
			console.log("3");
			console.log(this);
			// $(e.target).find($('.spoiler-revealer')).remove();
			// $(e.target).find($('.tweet-text')).show();
			// $(e.target).find($('.js-media-container')).show();
		});
	}
};
ApplicationController.attachListeners();

//if anchor on('click', function(){
//
//});