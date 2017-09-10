/*document.write(window.location);
document.write("<br/>");
document.write(window.screenX);
document.write("<br/>");
document.write(window.screenY);
document.write("<br/>");
document.write(window.innerWidth);
document.write("<br/>");
document.write(window.innerHeight);
document.write("<br/>");
document.write(window.window.screen.width);
document.write("<br/>");
document.write(window.window.screen.height);
document.write("<br/>");

alert(window.location)

var user = window.prompt("what is your name")
document.write("Hello " + user)
*/

/*var histories = window.history
for (i=0;i<histories.length;i++) {
	document.write(window.history);
	document.write("<br/>");
}*/


function reset() {
	var allh2 = document.getElementsByTagName("h2")
	//console.log(allh2);
	for (i=0;i<allh2.length;i++) {
	allh2[i].style.fontSize = "1em"
	}
}

function increase() {
	var allh2 = document.getElementsByTagName("h2")
	//console.log(allh2);
	for (i=0;i<allh2.length;i++) {
	allh2[i].style.fontSize = "2em"
	}
}

function decrease() {
	var allh2 = document.getElementsByTagName("h2")
	//console.log(allh2);
	for (i=0;i<allh2.length;i++) {
	allh2[i].style.fontSize = "0.5em";
	}
}

function blue() {
	var body = document.getElementsByTagName("body")
	//console.log(allh2);
	body[0].style.backgroundColor = "blue";
	body[0].style.color = "orange";
}


function red() {
	var body = document.getElementsByTagName("body")
	//console.log(allh2);
	body[0].style.backgroundColor = "magenta";
	body[0].style.color = "yellow";
}

function addPara() {
	var paragraph = document.getElementById("intro")
	var newPara = document.createElement("p")
	paragraph.appendChild(newPara)
	newPara.innerHTML="This is a new paragraph"
}

function removePara() {
	var paragraph1 = document.getElementById("intro")
	var paragraph = document.querySelectorAll("#intro p")
	if (paragraph1.hasChildNodes()) {
		paragraph[paragraph.length-1].parentNode.removeChild(paragraph[paragraph.length-1]);
	}
}

function addToDo() {
	var list = document.getElementById("todolist");
	var newItem = document.createElement("li");
	var deleteItem = document.createElement("button");
	var itemText = document.createElement("span");
	var item = document.getElementById("userInput").value;
	itemText.innerHTML = item + " ";
	deleteItem.innerHTML = "Remove";
	newItem.appendChild(itemText)
	newItem.appendChild(deleteItem)
	deleteItem.onclick = function() {
		list.removeChild(newItem);
	};

	list.appendChild(newItem)

}
/*
function removeItem() {
	var listItem = document.getElementsByTagName("li")
	var listButton = document.getElementsByTagName("button")
	if (listItem.hasChildNodes()) {
		listItem[listItem.length-1].parentNode.removeChild(listItem[paragraph.length-1])
	}

	
}*/

