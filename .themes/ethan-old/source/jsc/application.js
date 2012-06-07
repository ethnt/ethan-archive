$(document).ready(function() {
	$("article.video header").fitVids();
});

$("audio,video").mediaelementplayer();

$("h2 a").each(function() {
        var wordArray = $(this).text().split(" ");
        wordArray[wordArray.length-2] += "&nbsp;" + wordArray[wordArray.length-1];
        wordArray.pop();
        $(this).html(wordArray.join(" "));
});