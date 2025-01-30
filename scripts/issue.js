
var hasPr=false;

function go() {
	let spans = document.querySelectorAll("span[data-user-id]");
	var id = document.querySelector(".js-issue-id").innerText;
	var pr = spans[2].innerText == "Review" || spans[2].innerText == "Ready for merge";
	
	if(pr != hasPr ) {
		if( pr == false ) {
			console.log("deleting ", document.getElementsByClassName("mLink"));
			const links = document.getElementsByClassName("mLink");
			while(links.length > 0){
				links[0].parentNode.removeChild(links[0]);
			}
		} else {
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
		
			document.querySelector("h1").appendChild(node);
		}
		hasPr = pr;
	}
	window.setTimeout( go, 1000);
}

setTimeout(go, 2000);