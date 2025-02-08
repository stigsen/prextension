const frequency=1000;
const linkName="mLink";

function createImageLink(href){
	const node = document.createElement("a");
	node.href = href;
	node.setAttribute("class", linkName);
	node.setAttribute("target", "_blank");
	node.setAttribute("title", "Open github");
	node.setAttribute("style", "margin-left:2px");

	const img = document.createElement("img");
	img.src = chrome.runtime.getURL("images/favicon.png");
	img.width=16;
	img.height=16;
	
	node.appendChild( img );
	
	return node;
}

function createPrLink(id) {
	return createImageLink("https://github.com/stakeholderit/surveyxact/issues?q=is%3Apr%20head%3A" + id );
}

function createBranchLink(id) {
	return createImageLink("https://github.com/stakeholderit/surveyxact/tree/" + id);
}

function deleteLinks(){
	const links = document.getElementsByClassName(linkName);
	while(links.length > 0){
		links[0].parentNode.removeChild(links[0]);
	}	
}