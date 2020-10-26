//add event-listener to inc-dec buttons
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

addEventToButton();

//add event listener to action-buttons
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("start").addEventListener("click", start_pause);
document.getElementById("mode").addEventListener("click", changeMode);


//check a number that more then 10 or not for render
function check10(number) {
	if (number < 10) {
		return "0".concat(number);
	} else {
		return number;
	}
}

//get id of input event
function getId(event) {
	return event.target.id;
}


//action functions for inc-dec buttons
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

//render numbers to html
function renderNumber(elementId, number) {
	document.getElementById(elementId).innerText = number;
}


//check sec and min if more than 59 than increase min and hr
//relative connected timer to use for count function
function checkMin(min) {
	let hr = parseInt(document.getElementById("hr").innerText);
	if (min > 59) {
		hr++;
		hr = check10(hr);
		document.getElementById("hr").innerText = hr;
		return 0;
	} else if (min < 0) {
		hr--;
		if(hr < 0) {
			hr = 0;
		}
		hr = check10(hr);
		document.getElementById("hr").innerText = hr;
		return 59;
	} else {
		return min;
	}
}

function checkSec(sec) {
	let min = parseInt(document.getElementById("min").innerText);
	if (sec > 59) {
		min++;
		min = checkMin(min);
		min = check10(min);
		document.getElementById("min").innerText = min;
		return 0;
	} else if (sec < 0) {
		if (min == 0) {
			min = check10(min);
			document.getElementById("min").innerText = min;
			return 59;
		} else {
			min--;
			min = checkMin(min);
			min = check10(min);
			document.getElementById("min").innerText = min;
			return 59;			
		}
	} else {
		return sec;
	}
}


//reset button: set all num,ber to 00, clear timer interval and change pause to start
function reset() {
	var numbers =  document.getElementsByClassName("number");
	for (let number of numbers) {
		number.innerText = "00";
	}
	timer = clearInterval(timer);
	startState = "start";
	document.getElementById("start").innerText = "start";
}

//startState and mode are used to define what counter have to do
var startState = "start";
var mode = "countdown";
var timer;  // initialize timer variable

//change start state from start to pause and vice versa, return boolean to turn on and of the timer
function changeStartState() {
	if (startState == "start") {
		startState = "pause";
		document.getElementById("start").innerText = "pause";
		return true;
	} else if (startState == "pause") {
		startState = "start";
		document.getElementById("start").innerText = "start";
		return false;
	}
}

//change from countdown to countup
function changeMode() {
	if (mode == "countdown") {
		mode = "countup";
		document.getElementById("mode").innerText = "countup";
	} else if (mode == "countup") {
		mode = "countdown";
		document.getElementById("mode").innerText = "countdown";
	}
}

//start or pause timer
function start_pause() {
	let on = changeStartState();
	if (on == true) {
		timer = setInterval(count, 995);
	} else if (on == false) {
		timer = clearInterval(timer);
	}
}


//count function for both countdown and countup base on click event on second's inc-dec buttons
function count() {
	if (mode == "countdown") {
		countDown();
	} else if (mode == "countup") {
		countUp();
	}
}

//activate counter via trigger click event on second's inc-dec buttons
function countDown() {
	let sec = document.getElementById("sec").innerText;
	let min = document.getElementById("min").innerText;
	let hr = document.getElementById("hr").innerText;
	if (sec == 0 && min == 0 & hr == 0) {
		let startButton = document.getElementById("start");
		startButton.click();
	} else {
		let decSecButton = document.getElementById("dec-sec");
		decSecButton.click();
	}
}

function countUp() {
	let incSecButton = document.getElementById("inc-sec");
	incSecButton.click();
}