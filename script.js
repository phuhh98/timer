//check a number that more then 10 or not 
function check10(number) {
	if (number < 10) {
		return "0".concat(number);
	} else {
		return number;
	}
}

//add event-listener to inc-dec buttons
//inc-dec buttons
function addEventToButton() {
	var addButtons = document.getElementsByClassName("add");
	var minusButtons = document.getElementsByClassName("minus");
	for (let button of addButtons) {
		button.addEventListener("click", addNumber);
	}
	for (let button of minusButtons) {
		button.addEventListener("click", minusNumber);
	}
}

//get id of input event
function getId(event) {
	return event.target.id;
}

function addNumber(event){
	let buttonId = getId(event);
	let elementId = buttonId.slice(4);
	let number = parseInt(document.getElementById(elementId).innerText) + 1;
	switch (elementId) {
		case "sec":
			number = checkSec(number);
			break;
		case "min":
			number = checkMin(number);
			break;
		default:
			break;
	}
	number = check10(number);
	renderNumber(elementId, number);
}

function minusNumber(event){
	let buttonId = getId(event);
	let elementId = buttonId.slice(4);
	let number = parseInt(document.getElementById(elementId).innerText) - 1;
	if (number < 0) {
		number = 59;
	}
	number = check10(number);
	renderNumber(elementId, number);
}

function renderNumber(elementId, number) {
	document.getElementById(elementId).innerText = number;
}


//check sec and min if more than 59 than increase min and hr
function checkMin(min) {
	if (min > 59) {
		let hr = parseInt(document.getElementById("hr").innerText) + 1;
		hr = check10(hr);
		document.getElementById("hr").innerText = hr;
		return 0;
	} else {
		return min;
	}
}

function checkSec(sec) {
	if (sec > 59) {
		let min = parseInt(document.getElementById("min").innerText) + 1;
		if (min > 60) {
			min = checkMin(min);
		}
		min = check10(min);
		document.getElementById("min").innerText = min;
		return 0;
	} else {
		return sec;
	}
}

addEventToButton();

//action-button
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("start").addEventListener("click", startAction);

//use for defining action when start button clicked
var startButton = {
	state: "stop",
}

//set all number to 00
function reset() {
	var numbers =  document.getElementsByClassName("number");
	for (let number of numbers) {
		number.innerText = "00";
	}
}

//action when click start button depend on startButton.state whether start or pause
function startAction() {
	if (startButton.state == "stop") {
		startButton.state == "start";
		countDown();
	} else {
		startButton.state = "pause";
		pause();
	}

}
