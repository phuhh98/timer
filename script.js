//add event listener to buttons
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

function getId(param) {
	return param.target.id;
}

function addNumber(param){
	let buttonId = getId(param);
	let elementId = buttonId.slice(4);
	let number = parseInt(document.getElementById(elementId).innerText) + 1;
	number = check10(number);
	renderNumber(elementId, number);

}

function minusNumber(param){

}

function renderNumber(elementId, number) {
	document.getElementById(elementId).innerText = number;
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


//check a number that more then 10 or not 
function check10(number) {
	if (number < 10) {
		return "0".concat(number);
	} else {
		return number;
	}
}
