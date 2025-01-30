
var hasPr=false;

function go() {
	let spans = document.querySelectorAll("span[data-user-id]");
	var id = document.querySelector(".js-issue-id").innerText;
	
	var pr = spans[2].innerText == "Review" || spans[2].innerText == "Ready for merge";
	
	if(pr != hasPr ) {
		if( pr == false ) {
			console.log("deleting links");
			deleteLinks();
		} else {
			var node = createLink(id);
		
			document.querySelector("h1").appendChild(node);
		}
		hasPr = pr;
	}
	window.setTimeout( go, 1000);
}

setTimeout(go, 2000);