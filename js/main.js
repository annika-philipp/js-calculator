
document.addEventListener('DOMContentLoaded', start)

function start() {
    addEventListeners()
}

function addEventListeners() {

var buttons = document.getElementsByClassName('button'); 
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', clickButton)
}
}

var numberButtons = '.1234567890';
var operationButton = '+-*/';
var equation = ''; 

function clickButton (evt) {
    var id = evt.target.id;

    if (id === 'AC') {
        window.location.reload();
    } 

    if (numberButtons.includes(id)) {
        equation += id
        document.getElementById('screen').innerText = equation
    }

    if (operationButton.includes(id)) {
        equation += id
        document.getElementById('screen').innerText = equation
    }
    
    if (id === "=") {
    document.getElementById("screen").innerText = eval(equation)
    }


}
