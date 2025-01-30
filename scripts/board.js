
var foundReviews=0;

function updateIssues(issues, footers) {
	for( var i = 0; i < issues.length; i++ ) {
		var id = issues[i].innerText;
		var node = createLink(id);
		
		footers[i].appendChild(node);
	}
}

function go() {
	let issues = document.querySelectorAll(".yt-agile-card_color-9 .js-issue-id");
	let issues2 = document.querySelectorAll(".yt-agile-card_color-10 .js-issue-id");
	let footers = document.querySelectorAll(".yt-agile-card_color-9 .yt-agile-card__footer");
	let footers2 = document.querySelectorAll(".yt-agile-card_color-10 .yt-agile-card__footer");
	
	console.log("Found " + issues.length , issues2.length );
	var total = issues.length + issues2.length;
	
	if(total != foundReviews ) {
		deleteLinks();

		updateIssues(issues, footers);
		updateIssues(issues2, footers2);
		
		foundReviews = total;
	}

	window.setTimeout( go, 1000);
}

setTimeout(go, 2000);