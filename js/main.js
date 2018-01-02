//WORK IN PROGRESS! 

document.addEventListener('DOMContentLoaded', start)

function start() {
    addEventListeners()
}

function addEventListeners() {

var buttons = document.getElementsByClassName("button")  // get buttons from html
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", clickButton)
}
}


var equation = []; // empty array results to be pushed to total?
var total = []; // empty array results to send to "screen?

function clickButton (evt) {
    var id = evt.target.id;

    if (id === "AC") {
        window.location.reload();
    } 

    if (id === "=") {
    document.getElementById("screen").innerText = eval(equation.join(''));
    }

    else {
        document.getElementById("screen").innerHTML = id
        equation.push(id)
        }


}
