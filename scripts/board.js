
let foundReviews=0;

function updatePrIssues(column) {
	for( var i = 0; i < column.issues.length; i++ ) {
		var id = column.issues[i].innerText;
		var node = createPrLink(id);
		column.footers[i].appendChild(node);
	}
}
function updateBranchIssues(column) {
	for( var i = 0; i < column.issues.length; i++ ) {
		var id = column.issues[i].innerText;
		var node = createBranchLink(id);
		column.footers[i].appendChild(node);
	}
}

function columns(nr){
	return {
		issues : document.querySelectorAll(".yt-agile-card_color-" + nr + " .js-issue-id"),
		footers : document.querySelectorAll(".yt-agile-card_color-" + nr + " .yt-agile-card__footer")		
	};
}

const IN_PROGRESS=2;
const REVIEW=9;
const READY_FOR_MERGE=10;

function go() {
	let columns1 = columns(IN_PROGRESS);
	let columns2 = columns(REVIEW);
	let columns3 = columns(READY_FOR_MERGE);
	
	console.log("Found " + columns1.issues.length , columns2.issues.length, columns3.issues.length );
	const total = columns1.issues.length + columns2.issues.length + columns3.issues.length;

	if(total != foundReviews) {
		deleteLinks();

		updateBranchIssues(columns1);
		updatePrIssues(columns2);
		updatePrIssues(columns3);
		
		foundReviews = total;
	}

	window.setTimeout( go, frequency);
}

setTimeout(go, 2000);