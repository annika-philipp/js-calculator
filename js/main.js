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


var subtotal = []; // empty array results to be pushed to total?
var total = []; // empty array results to send to "screem?

function clickButton (num) {
    var id = num.target.id;

    if (id === "AC") {
        window.location.reload();
    } 

    if (id === "=") {
        document.getElementById("screen").innerText = eval(subtotal.join(''))

    }

    else {
        document.getElementById("screen").innerHTML = id
        subtotal.push(id)
        }


}
