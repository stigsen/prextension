let hasPr = false;

function go() {
	let spans = document.querySelectorAll("span[data-user-id]");
	const id = document.querySelector(".js-issue-id").innerText;

	const pr = spans[2].innerText == "Review" || spans[2].innerText == "Ready for merge";

	if(pr != hasPr ) {
		if( pr == false ) {
			console.log("deleting links");
			deleteLinks();
		} else {
			const node = createLink(id);
			document.querySelector("h1").appendChild(node);
		}
		hasPr = pr;
	}
	window.setTimeout( go, frequency);
}

setTimeout(go, 2000);