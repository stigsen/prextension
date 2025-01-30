
var foundReviews=0;

function updateIssues(issues, footers) {
	for( var i = 0; i < issues.length; i++ ) {
		var id = issues[i].innerText;
		var node =  document.createElement("a");
		node.href = "https://github.com/stakeholderit/surveyxact/issues?q=is%3Apr%20head%3A" + id;
		node.setAttribute("class", "mLink");
		node.setAttribute("target", "_blank");
		node.setAttribute("style", "margin-left:2px");
		
		var img = document.createElement("img")
		img.src = chrome.runtime.getURL("images/favicon.png");
		img.width=16;
		img.height=16;
		node.appendChild( img );
		
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
		// Delete all the old links
		const links = document.getElementsByClassName("mLink");
		while(links.length > 0){
			links[0].parentNode.removeChild(links[0]);
		}

		updateIssues(issues, footers);
		updateIssues(issues2, footers2);
		
		foundReviews = total;
	}

	window.setTimeout( go, 1000);
}

setTimeout(go, 2000);