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

function addNumber(){

}

function minusNumber(){

}

function renderNumber(elementById, number) {
	document.getElementById(elementId).innerText = number;
}

addEventToButton();

//action-button
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("start").addEventListener("click", start);
var startButton = {
	state: "stop",
}

function reset() {
	var numbers =  document.getElementsByClassName("number");
	for (let number of numbers) {
		number.innerText = "00";
	}

}

function start() {

}


//check a number that more then 10 or not 
function check10(number) {
	if (number < 10) {
		return "0".concat(number);
	} else {
		return number;
	}
}