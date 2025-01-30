
const linkName="mLink";

function createLink(id) {
	console.log("Creating link ", id);
	var node =  document.createElement("a");
	node.href = "https://github.com/stakeholderit/surveyxact/issues?q=is%3Apr%20head%3A" + id;
	node.setAttribute("class", linkName);
	node.setAttribute("target", "_blank");
	node.setAttribute("title", "Open pull request");
	node.setAttribute("style", "margin-left:2px");
	
	var img = document.createElement("img")
	img.src = chrome.runtime.getURL("images/favicon.png");
	img.width=16;
	img.height=16;
	
	node.appendChild( img );
	
	return node;
}

function deleteLinks(){
	console.log("deleting links");
	const links = document.getElementsByClassName(linkName);
	while(links.length > 0){
		links[0].parentNode.removeChild(links[0]);
	}	
}