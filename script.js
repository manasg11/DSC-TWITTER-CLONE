var tweets = document.getElementById("tweets");
var replies = document.getElementById("replies");
var media = document.getElementById("media");
var likes = document.getElementById("likes");

var defaultcol = "rgb(104, 104, 104)";

function changeborder(num) {
	document.getElementById("tweets").style.borderWidth = "0px";
	document.getElementById("tweets").style.color = defaultcol;
	document.getElementById("replies").style.borderWidth = "0px";
	document.getElementById("replies").style.color = defaultcol;
	document.getElementById("media").style.borderWidth = "0px";
	document.getElementById("media").style.color = defaultcol;
	document.getElementById("likes").style.borderWidth = "0px";
	document.getElementById("likes").style.color = defaultcol;
	if (num == 1) var current = document.getElementById("tweets");
	if (num == 2) var current = document.getElementById("replies");
	if (num == 3) var current = document.getElementById("media");
	if (num == 4) var current = document.getElementById("likes");
	if (num != 1) document.getElementById("dsctweet").src = "";
	else document.getElementById("dsctweet").src = "images/dsctweet.PNG";
	current.style.borderStyle = "solid";
	current.style.borderWidth = "medium";
	current.style.borderColor = "rgb(29, 161, 242)";
	current.style.borderTop = "0px";
	current.style.borderRight = "0px";
	current.style.borderLeft = "0px";
	current.style.color = "rgb(29, 161, 242)";
}

function changecolor() {
	var box = document.getElementById("box");
	box.style.backgroundColor = "white";
	box.style.borderColor = "rgb(29, 161, 242)";
	var img = document.getElementById("image");
	img.src = "images/search2.PNG";
}
