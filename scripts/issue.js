let prOrBranch = "none";

function go() {
	let spans = document.querySelectorAll("span[data-user-id]");
	const id = document.querySelector(".js-issue-id").innerText;

	const state=spans[2].innerText;
	const pr = state == "Review" || state == "Ready for merge";
	const branch = state == "In Progress";

	const newPrOrBranch = pr ? "pr" : branch ? "branch" : "none";
	
	if(newPrOrBranch != prOrBranch ) {
		deleteLinks();
		if( newPrOrBranch == "pr" ) {
			const node = createLink(id);
			document.querySelector("h1").appendChild(node);
			} else {
			const node = createBranchLink(id);
			document.querySelector("h1").appendChild(node);
			}
		prOrBranch = newPrOrBranch;
	}
	window.setTimeout( go, frequency);
}

setTimeout(go, 2000);